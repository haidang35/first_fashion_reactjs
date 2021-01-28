import React from 'react';
import './CSS/Blog-detail.css'
 export default function Blog_detail(){
     return(
         <section className="section-main-blog">
             <div className="title-box">
                 <div className="container">
                     <h1 className="title-page">Sustainability, comfort key for fashion brands</h1>
                     <p className="note-add-title">By Livemint  <span>|</span>  February 21, 2019  <span>|</span>   8 Comments</p>
                 </div>
             </div>
             <div className="main-box-blog">
                 <div className="container">
                     <div className="background-box-1">
                         <img src="Image/Blog_Details/blog-details.jpg" />
                     </div>
                     <div className="methods-share">
                         <h4>SHARE</h4>
                         <ul className="icon-share-box">
                             <li style={{backgroundColor: '#4267b2'}}><i id="icon1" className="fab fa-facebook-f" /></li>
                             <li style={{backgroundColor: '#1da1f2'}}><i id="icon2" className="fab fa-twitter" /></li>
                             <li style={{backgroundColor: '#fe0003'}}><i id="icon3" className="fab fa-youtube" /></li>
                             <li style={{backgroundColor: '#0173b2'}}><i id="icon4" className="fab fa-linkedin-in" /></li>
                         </ul>
                     </div>
                     <div className="block-right">
                         <p className="text-note">With both men and women all around seen in track pants, leggings and other comfort wear, it doesn’t take rocket science to figure out that people have taken to more comfortable clothing since the lockdown was announced in March 2020. Fashion retailers Mint has spoken to in the past few months have acknowledged increased sales of loungewear even as the lockdown restrictions eased.</p>
                         <p className="text-note">“The demand has shifted from formal to casual wear. Fashion designers are predicting a move from tighter, body-fitting fashion to more loose apparel. You and I are going to see more baggies," said Sanjay Jain, chief executive officer (CEO) at PDS Multinational Fashions Ltd</p>
                         <p className="text-note">When Jain speaks, you take him seriously. He represents a company that clocked more than ₹6,000 crore in revenue in 2019-20 from doing business with some of the world’s best-known fashion retailers such as Superdry, Primark and Next, as well as with supermarket chains such as Walmart, Woolworths and Sainsbury’s.</p>
                         <p>PDS runs a global operation that offers product development, sourcing, design and manufacturing services to clothing brands in the UK, Germany, Hong Kong and North America. The company helps retailers in establishing next season’s fashion and fabrics, creates samples and gets the orders manufactured.

                             Asked about the way forward for fashion, Jain throws up telling numbers. In 2019, for PDS, the spilt between casual and formal wear was roughly in the ratio of 75:25. This has changed to 95:5 in the post-covid era.</p>
                         <div className="quote-box">
                             <i className="fas fa-quote-left quote" />
                             <p className="text-p2"><i>“The space emptied by formals has been taken over by an increase in demand in athleisure (Nike, JD Sports), denim and loungewear,”</i></p>
                             <h4 className="author">_ JAIN SMITH _</h4>
                         </div>
                         <div className="part3">
                             <p>The designers at PDS indicate that athleisure and denim will be prominent this year. “We are seeing the trend being shifted from causal trousers to denim. Before covid, the split was 70% (causal trousers) and 30% (denims), which has reversed post-covid," Jain said.</p>
                             <p className="text-note">Given the trend, footwear retailer Bata India, too, is eyeing the casual apparel category as consumer focus shifts to athleisure. In a recent interview to Mint, Bata Shoe Organisation’s global CEO Sandeep Kataria said the company was testing its training and fitness apparel under the Power brand.</p>
                             <p className="text-note">T-shirt dresses and polos are also seeing robust demand in Europe and North America. Shirts have dropped by 30-40% in sales across causals and formals, Jain said.

                                 It’s tough to predict if formal clothing will bounce back. “The revival of formal wear is based on the assumption that the vaccine will have an impact, covid will go away and you and I will go back to office. The trends are encouraging, but a structural shift has taken place. There is a realization that work from home is doable," Jain said.</p>
                         </div>
                         <hr />
                         <div className="part4-blog">
                             <div className="row">
                                 <div className="col-md-6">
                                     <div className="author-box">
                                         <img src="Image/About/about2.webp" />
                                         <span>Le Duc Quan</span>
                                     </div>
                                 </div>
                                 <div className="col-md-6">
                                     <div className="list-tag-box">
                                         <ul>
                                             <li><a href="#">#Fashion</a></li>
                                             <li><a href="#">#Trending</a></li>
                                             <li><a href="#">#2020</a></li>
                                         </ul>
                                     </div>
                                 </div>
                             </div>
                         </div>
                         <div className="form">
                             <div className="row">
                                 <div className="col-md-6">
                                     <div className="box-left">
                                         <i className="fas fa-arrow-left" />
                                         <span> Previous Pod</span>
                                         <p>Special autumn and winter sweatshirts models</p>
                                     </div>
                                 </div>
                                 <div className="col-md-6">
                                     <div className="box-right">
                                         <div className="arrow-right">
                                             <span className="pod">Next Pod</span>
                                             <i id="arrow-right" className="fas fa-arrow-right" />
                                         </div>
                                         <p className="p-pod">Environmentally friendly fashion trend</p>
                                     </div>
                                 </div>
                             </div>
                             <div className="content-box-5-blog">
                                 <h2 className="leave-a-comment">Leave A Comment</h2>
                                 <div className="input-blog-box">
                                     <div className="row">
                                         <div className="col-md-4">
                                             <input className="fill-up form-control" type="text" name="name" placeholder="Name" />
                                         </div>
                                         <div className="col-md-4">
                                             <input className="fill-up form-control" type="text" name="email" placeholder="Email" />
                                         </div>
                                         <div className="col-md-4">
                                             <input className="fill-up form-control" type="text" name="phone" placeholder="Phone" />
                                         </div>
                                     </div>
                                     <textarea className="box-comment form-control" type="text" name="cmt" placeholder="Comment" defaultValue={""} />
                                     <a className="post-button" href="#">Post Comment</a>
                                 </div>
                             </div>
                         </div>
                     </div>
                 </div>
             </div>
         </section>

     )
 }