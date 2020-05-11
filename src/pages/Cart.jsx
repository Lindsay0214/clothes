import React, { useState, useEffect } from 'react';
import Layout from 'component/Layout';
import CartItem from '../component/other/cart/CartItem';
import axios from 'commons/axios';
import { formatPrice } from 'commons/helper';

const Cart = () => {
    const [carts, setCarts] = useState([]);
    useEffect(() => {
        const user = global.auth.getUser() || {};    //依userid給購物車數據
        axios.get(`/carts?userId=${user.eamil}`).then(res => setCarts(res .data));
    }, []);

    const totalPrice = () => {
        const totalPrice = carts
            .map(cart => cart.mount * parseInt(cart.Price))
            .reduce((a,value) => a + value, 0);
        return formatPrice(totalPrice);
    };

    return (
        <Layout>
            <div className="cart-page">
                <p className="title has-text-centered">購物車</p>
                <div className="cart-list">
                    {
                        carts.map(cart => (
                        <CartItem key={cart.id} cart={cart} />
                            ))
                    }
                </div>
                <div className="cart-total">
                    Total:
                    <span className="total-price">{totalPrice()}</span>
                </div>
            </div>
        </Layout>
        );  
    };

export default Cart;


// import React , { Component }from 'react';
// import axios from 'axios';
// import Layout from 'component/Layout';
// import CartItem from '../component/other/cart/CartItem';

// export default class Cart extends Component{
// 	state={
// 		list:[],
// 		selectedall:false,
// 		totalPrice:0
// 	}
// 	render(){
// 		console.log(this.state.list)
// 		return(
//         <Layout>
//             <div className="cart-page">
//                 <p className="title has-text-centered">購物車</p>
//                 <div className="cart-list">
//                 {
// 					this.state.list.map((item,i)=>{
// 						return(
// 							<div key={i}>
// 								<CartItem type="checkbox" checked={item.selected} onClick={this.dan.bind(this,i)}/>
// 								<p>{item.pname}</p>
// 								<p>{item.pprice}</p>
// 								<input type="number" value={item.pnum} onChange={this.num.bind(this,i)}/>
// 								<div type="primary" onClick={this.del.bind(this,i)}>x</div>
// 								<hr/>
// 							</div>
// 						)
// 					})
// 				}
//                 </div>
//                 <div className="cart-total">
// 					全选 <input type="checkbox" checked={this.state.selectedall} onClick={this.quan.bind(this)}/> 
// 					总金额 {this.state.totalPrice}
// 				</div>
// 			</div>
//         </Layout>
// 		)
//     }
// 	// 总金额
// 	zong(){
// 		let arr=this.state.list;
// 		let qian=0;
// 		arr.map((item)=>{
// 			if(item.selected==true){
// 				qian+=item.pnum*item.pprice
// 			}
// 		})
// 		this.setState({
// 			totalPrice:qian
// 		})
// 	}
// 	// 数量
// 	num(i,e){
// 		let id=this.state.list[i].pid;
// 		let arr=this.state.list;
// 		let nums=e.target.value;
//         arr[i].pnum=nums

//         axios({
// 			url:"http://localhost:3005",
// 			params:{
// 				uid:19802,
// 				pid:id,
// 				pnum:nums
// 			}
// 		}).then((data)=>{
// 			console.log(data.data)
// 			this.setState({
// 				list:arr
// 			})	
// 			this.zong()
// 		})
// 	}
// 	// 单选
// 	dan(i){
// 		let arr=this.state.list;
// 		arr[i].selected=!arr[i].selected;
// 		let arr1=arr.filter((item)=>item.selected===true);
		
// 		if(arr1.length===arr.length){
// 			this.setState({
// 				list:arr,
// 				selectedall:true
// 			})
// 		}else{
// 			this.setState({
// 				list:arr,
// 				selectedall:false
// 			})
// 		}
// 		this.zong()
// 	}
// 	// 全选
// 	quan(){
// 		let flag=this.state.selectedall;
// 		let arr=this.state.list;
// 		flag=!flag;
// 		if(flag===true){
// 			arr.map((item)=>{
// 				item.selected=true
// 			})
// 		}else{
// 			arr.map((item)=>{
// 				item.selected=false
// 			})
// 		}
		
// 		this.setState({
// 			selectedall:flag,
// 			list:arr
// 		})
// 		this.zong()
// 	}
// 	// 删除
// 	del(i){
// 		let id=this.state.list[i].pid
// 		let arr=this.state.list;
// 		axios({
// 			url:'http://jx.xuzhixiang.top/ap/api/cart-delete.php',
// 			params:{
// 				uid:19802,
// 				pid:id
// 			}
// 		}).then((data)=>{
// 			console.log(data.data)
// 			arr.splice(i,1);
// 			this.setState({
// 				list:arr
// 			})
// 			this.zong()
// 		})
// 	}
// 	componentDidMount(){
// 		axios({
// 			url:'http://jx.xuzhixiang.top/ap/api/cart-list.php',
// 			params:{id:19802}
// 		}).then((data)=>{
// 			let arr=data.data.data;
// 			arr.map((item)=>{
// 				item.selected=false //控制选中以及未选中
// 			})
// 			this.setState({
// 				list:arr
// 			})
// 		})
// 	}
// }


