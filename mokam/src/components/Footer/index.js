import { StyledFooter } from "./style"

function Footer() {
    return (
        <StyledFooter>
            <div className="width-wrapper">
                <ul>
                    <li>
                        <h2>Important Link</h2>
                        <a href="/some">Retailer</a>
                        <a href="/some">Supplier</a>
                    </li>
                    <li>
                        <h2>Legal</h2>
                        <a href="/some">IPR Infringement Policy</a>
                        <a href="/some">Permitted Usage Policy</a>
                        <a href="/some">Privacy Policy</a>
                        <a href="/some">Terms of Service</a>
                    </li>
                    <li>
                        <h2>Contact</h2>
                        <a href="/some">B112, Road 06, Mohakhali <br /> DOHS, Dhaka-1206</a>
                        <a href="/some">hello@mokam.com.bd</a>
                    </li>
                    <li>
                        <h2></h2>
                        <a href="/some"> </a>
                        <a href="/some"> </a>
                        <a href="/some"> </a>
                        <a href="/some"> </a>
                    </li>
                </ul>
            </div> 
        </StyledFooter>
    )
}
export default Footer