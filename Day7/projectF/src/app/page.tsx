import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import StripePayment from "@/components/stripepayment";
import CheckoutPage from "@/components/CheckoutPage";



export default function  Home() {

 
  return (
   <div>
    
     <Header/>
    <Footer/> 
    
<StripePayment></StripePayment>
    
    </div>
    
  );
}
