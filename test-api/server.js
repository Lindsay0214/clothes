const path = require('path');
const fs = require('fs'); // fs是node內的文件系統
const jsonServer = require('json-server');
const jwt = require('jsonwebtoken');
const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, 'data.json'));
const middleWares = jsonServer.defaults();
server.use(jsonServer.bodyParser);
server.use(middleWares);

// 定義getUsersDb 且使用JSON.parse轉換JSON檔
// 調用readFileSync （讀取文件的函數）
// __dirname, 'user.json' 絕對路徑寫法,UTF-8(解析格式)
const getUsersDb = () => {
  return JSON.parse(fs.readFileSync(path.join(__dirname, 'users.json'), 'UTF-8')
  );
};


const isAuthenticated = ({email, password}) => {
  return (
    getUsersDb().users.findIndex(
      user => user.email === email && user.password === password
      ) !== -1  // 從JSON文件裡讀取user資料,findIndex會返回數值所以可以用數值判斷
  );
};

// 判斷email是否存在
const isExist = email => {
  return getUsersDb().users.findIndex(user => user.email === email) !== -1;
};

// 使用jwt庫提供的註冊方法,payload希望返回後端的數據,SECRET簽名的密鑰,expiresIn 超時時間
const SECRET = 'q3rx34oi2mr33po4j34io2p3mc3xm4' ;
const expiresIn = '1h' ;
const createToken = payload => {
  return jwt.sign(payload, SECRET, { expiresIn });
};

server.post('/auth/login', (req, res) => {
  const { email, password } = req.body;
  
  // 透過設定函數 isAuthenticated 方法來校驗 email, password 是否匹配
  // 使用node-jwt庫封裝 payload從getUsersDb獲取傳遞

  if (isAuthenticated({email, password})) { 
    const user = getUsersDb().users.find(
      u => u.email === email && u.password === password
      );
    const { nickname, type } = user;
    // jwt
    const jwToken = createToken({ nickname, type, email });
    return res.status(200).json(jwToken);
  } else {
    const  status = 401;
    const message = 'Incorrect email or password';
    return res.status(status).json({status, message})
  }
});


// 註冊

server.post('/auth/register', (req, res) => {
  const { email, password, nickname, type } = req.body;

  // 註冊過
  if (isExist(email)) { 
    const status = 401;
    const message = 'Already exist';
    return res.status(status).json({ status, message });
  }

  // 新用戶
  fs.readFile(path.join(__dirname, 'users.json'), (err, _data) => {
    if (err) {
      const status = 401;
      const message = err;
      return res.status(status).json({ status, message });
    }

    // 新增用戶
    const data = JSON.parse(_data.toString());
    const last_item_id = data.users[data.users.length - 1].id;
    data.users.push({ id: last_item_id + 1, email, password, nickname, type});
    fs.writeFile(
      path.join(__dirname, 'users.json'),
      JSON.stringify(data),
      (err, result) => {
        if (err) {
          const status = 401;
          const message = err;
          res.status(status).join({ status, message });
          return;
        }
      }
    );
  });

    // 註冊生成jwt
    const jwToken = createToken({ nickname, type, email });
    res.status(200).json(jwToken);
    });




    server.use('/carts', (req, res, next) => {
      if (
        req.headers.authorization === undefined ||
        req.headers.authorization.split(' ')[0] !== 'Bearer'
      ) {
        const status = 401;
        const message = 'Error in authorization format';
        res.status(status).json({ status, message });
        return;
      }
      try {
        const verifyTokenResult = verifyToken(
          req.headers.authorization.split(' ')[1]
        );
        if (verifyTokenResult instanceof Error) {
          const status = 401;
          const message = 'Access token not provided';
          res.status(status).json({ status, message });
          return;
        }
        next();
      } catch (err) {
        const status = 401;
        const message = 'Error token is revoked';
        res.status(status).json({ status, message });
      }
    });
    // Verify the token
    const verifyToken = token => {
      return jwt.verify(token, SECRET, (err, decode) =>
        decode !== undefined ? decode : err
      );
    };


    
server.use(router);
server.listen(3005, () => {
  console.log('JSON Server is running');
});