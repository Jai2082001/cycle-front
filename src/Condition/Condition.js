import classes from './Condition.module.css'
import { Sidebar } from 'semantic-ui-react'
import NavBar from '../NavBar/NavBar'
import { useEffect, useState } from 'react'
import FullScreenLoader from '../fullscreenLoader/FullScreenLoader'
import MobileDropDown from '../NavBar/MobileDropDown/MobileDropDown'
import Logo from '../images/sportsLogoRemoveBg.png';
import { useHistory } from 'react-router'

const Condition = () => {

    const [sidebar, changeSidebar] = useState('condition');
    
    const history = useHistory();
     
    const backHandler = () => {
        history.push('/home')
    }

    const profileHandler = () => {
        history.push('/profile')
    }

    const conditionHandler = () => {
        changeSidebar('condition')
    }

    const cancelHandler = () => {
        changeSidebar('cancel')
    }

    const returnHandler = () => {
        changeSidebar('return')
    }

    return (
        <>
            
            <>
                <div className={classes.parentContainer}>
                    {/* <NavBar
                        changeLocation={changeLocation} productNames={productNames} changeSidebar={changeSidebar} cycleBrand={cycleBrand}
                        categories={categories} sidebar={sidebar}
                    >
                    </NavBar> */}
                    <div className={classes.navbarDiv}>
                        <div><button onClick={backHandler}>Back to Site</button></div>
                            <img src={Logo}></img>
                        <div><button onClick={profileHandler}>Profile</button></div>
                    </div>    
                    <div className={classes.parentDiv}>
                        <h1>How can we help you?</h1>
                        <div className={classes.sidebarContainer}>
                            <div className={classes.sidebarOne}>
                                <button onClick={conditionHandler}>Terms and Conditions</button>
                                <button onClick={cancelHandler}>Cancellation Policy</button>
                                <button onClick={returnHandler}>Returns and Warranty</button>
                            </div>
                            <div className={classes.sidebarTwo}>
                                {sidebar === 'condition' && 
                                <div className={classes.adminSidebar}>
                                    <p>Tissot energy private limited a company incorporated under the laws of India, with its principal office at Rajasthan, is an online portal www.icicisports.com for the sale of multi-brand bicycles and sports goods and related accessories.</p>
                                    <p>Tissot energy shall provide you (“user”) bicycles and sports goods of various brands, related products/accessories & information. These products/services may be availed by the user in India at any time</p>
                                    <p>This master user agreement (“agreement”) is applicable to all bicycles and sports products sold through Tissot Energy. in addition to this agreement, the user shall be required to read and accept the relevant terms and conditions of any service (“tos”) for each such service, which may be updated or modified by Tissot Energy from time to time. such tos shall be deemed to be a part of this agreement and in the event of a conflict between such tos and this agreement, the terms of this agreement shall prevail</p>
                                    <p>All the terms, conditions and notices contained in this agreement and the tos, as may be posted on the website from time to time shall be applicable for all bicycles and products sold through Tissot Energy. For the removal of doubts, it is clarified that the purchase of any bicycle and sports goods product by the user constitutes an acknowledgement and acceptance by the user of this agreement and the tos. If the user does not agree with any part of such terms, conditions and notices, the user must not make any purchase through Tissot Energy</p>
                                    <p>Tissot Energy at its sole discretion reserves the right not to accept any order placed by the user through the website without assigning any reason thereof. Any contract to provide any service by Tissot Energy is not complete until full money towards the bicycle/product and sports goods is received from the user and accepted/acknowledged by Tissot Energy</p>
                                    <p>Tissot energy reserves the right to change the terms, conditions and notices under which the bicycles and sports products are offered through the website, including but not limited to price of the products offered through its website, which shall be intimated to Tissot Energy by the respective manufacturer/brand from time to time. The user shall be responsible for regularly reviewing these terms and conditions.</p>
                                    <h1>User Agreement</h1>
                                    <p>The user agrees and undertakes not to sell trade or resell or exploit for any commercial purposes, any of the bicycles sports products offered for sale through Tissot Energy. For the removal of doubt, it is clarified that the services offered herein are specifically meant for personal use only.</p>
                                    <p>The user further agrees and undertakes not to reverse engineer, modify copy, distribute, transmit, display, perform, reproduce, publish, license, create derivative works from, transfer, or sell any information, software, products or services obtained from the website. Limited reproduction and copying of the content of the website is permitted provided that the Tissot Energy's name is stated as the source. For the removal of doubt, it is clarified that unlimited or wholesale reproduction, copying of the content for commercial or non-commercial purposes and unwarranted modification of data and information within the content of the website is not permitted</p>
                                    <h1>Disclaimer of Warranties/Limitation of Liability</h1>
                                    <p>Tissot energy has endeavored to ensure that all the information provided by it is correct, but Tissot energy neither warrants nor makes any representations regarding the quality, accuracy or completeness of any data or information. Tissot energy makes no warranty, express or implied, concerning the website and/or its contents and disclaims all warranties of fitness for a particular purpose and warranties of merchantability in respect of products, including any liability, responsibility or any other claim, whatsoever, in respect of any loss, whether direct or consequential, to any user or any other person, arising out of or from the use of any such information.</p>
                                    <p>Tissot energy shall further not have responsibility or liability in relation to the validity of the legal rights related to third party content. All third party intellectual property rights as displayed on the website are owned by respective parties and Tissot Energy does not claim any rights over the same. The mere displaying of information, the intellectual property related thereto by third parties, does not in any way imply, suggest, or constitute Tissot Energy’s sponsorship or approval of related third-parties, or any affiliation between Tissot Energy And third-parties.</p>
                                    <p>Although Tissot Energy makes reasonable commercial efforts to ensure that the description and content in each page of the website is correct, it does not, however, take responsibility for changes that occurred due to human or data entry errors or for any loss or damages suffered by any user due to any information contained herein.</p>
                                    <p>Tissot energy does not endorse any advertiser on its website in any manner. The users are requested to verify the accuracy of all information on their own before undertaking any reliance on such information.</p>
                                    <p>In no event shall Tissot Energy be liable for any direct, indirect, punitive, incidental, special, consequential damages or any other damages resulting from: (a) the use or the inability to use the bicycle/product; (b) the cost of procurement of substitute goods and services or resulting from any goods, information or services purchased or obtained or messages received or transactions entered into thereon; (c) unauthorized access to or alteration of the user's transmissions or data; (d) any other matter relating to the services; including, without limitation, damages for loss of use, data or profits, arising out of or in any way connected in relation to the bicycles/products listed on Tissot Energy’s website.www.icicisports.com</p>
                                    <p>Neither shall Tissot Energy be responsible for the delay or inability to use/avail the website, or for any information, software, products, services and related graphics obtained from Tissot Energy, whether based on contract, tort, negligence, strict liability or otherwise. Further, Tissot Energy shall not be held responsible for non-availability of the website during periodic maintenance operations or any unplanned suspension of access to the services that may occur due to technical reasons or for any reason beyond Tissot Energy's control. The user understands and agrees that any material and/or data downloaded or otherwise obtained from Website/Tissot Energy is done entirely at their own discretion and risk and they will be solely responsible for any damage to their computer systems or any other loss that results from such material and/or data.</p>
                                    <p>These limitations, disclaimer of warranties and exclusions apply without regard to whether the damages arise from (a) breach of contract, (b) breach of warranty, (c) negligence, or (d) any other cause of action, to the extent such exclusion and limitations are not prohibited by applicable law.</p>
                                    <p>The maximum liability on part of tissot energy arising under any circumstances, in respect of any bicycle/product purchased, shall be limited up to a maximum of the refund of total amount received from the user/customer for such product less any cancellation, refund or others charges, as may be applicable. In no case Tissot Energy shall be liable for any consequential loss, damage or additional expense whatsoever.</p>
                                    <h1>Links to the Third Party Sites</h1>
                                    <p>
                                    The website may contain links to other websites ("linked sites"). The linked sites are not under the control of Tissot Energy or the website and Tissot Energy is not responsible for the contents of any linked site, including without limitation any link contained in a linked site, or any changes or updates to a linked site. Tissot Energy is not responsible for any form of transmission, whatsoever, received by the user from any linked site. Tissot energyis providing these links to the user only as a convenience, and the inclusion of any link does not imply endorsement by Tissot Energy or the website of the linked sites or any association with its operators or owners including the legal heirs or assigns thereof.
                                    </p>
                                    <p>
                                    Tissot Energy is not responsible for any errors, omissions or representations on any linked site. Tissot energy does not endorse any advertiser on any linked site in any manner. The users are requested to verify the accuracy of all information on their own before undertaking any reliance on such information.
                                    </p>
                                    <h1>Prohibition against unlawful use</h1>
                                    <p>As a condition of the use of the website, the user warrants that they will not use the website for any purpose that is unlawful or illegal under any law for the time being in force within or outside India or prohibited by this agreement and/or the tos including both specific and implied. In addition, the website shall not be used in any manner, which could damage, disable, overburden or impair it or interfere with any other party's use and/or enjoyment of the website. The user shall refrain from obtaining or attempting to obtain any materials or information through any means not intentionally made available or provided for or through the website.www.icicisports.com</p>
                                    <h1>Use of Communication services</h1>
                                    <p>The website may contain services such as email, chat, bulletin board services, information related to various bicycles/products and related information, forums, communities, personal web pages, calendars, and/or other message (hereinafter collectively referred to as "communication services"). The user agrees and undertakes to use the communication services only to post, send and receive messages and material that are proper and related to the particular communication service. By way of example, and not as a limitation, the user agrees and undertakes that when using a communication service, the user will not</p>
                                    <ul>
                                        <li>Defame, abuse, harass, stalk, threaten or otherwise violate the legal rights of others.</li>
                                        <li>Publish, post, upload, distribute or disseminate any inappropriate, profane, defamatory, infringing, obscene, indecent or unlawful topic, name, material or information</li>
                                        <li>Upload or distribute files that contain viruses, corrupted files, or any other similar software or programs that may damage the operation of the website or another's computer</li>
                                        <li>Advertise or offer to sell or buy any products for any business purpose, unless such communication service specifically allows such messages</li>
                                        <li>Conduct or forward surveys, contests, pyramid schemes or chain letters</li>
                                        <li>Download any file posted by another user of a communication service that the user know, or reasonably should know, cannot be legally distributed in such manner</li>
                                        <li>Falsify or delete any author attributions, legal or other proper notices or proprietary designations or labels of the origin or source of software or other material contained in a file that is uploaded
                                        </li>
                                        <li>Violate any code of conduct or other guidelines, which may be applicable for or to any particular communication service</li>
                                        <li>
                                        Violate any applicable laws or regulations for the time being in force in or outside India
                                        </li>
                                        <li>Violate any of the terms and conditions of this agreement or any other terms and conditions for the use of the website contained elsewhere herein</li>
                                    </ul>
                                    <p>Tissot energy will review materials posted through communication service and shall remove any materials in its sole discretion. Tissot energy reserves the right to terminate the user's access to any or all of the communication services at any time without notice for any reason whatsoever.</p>
                                    <p>Tissot Energy does not control or endorse the content, messages or information found in any communication service and, therefore, Tissot Energy specifically disclaims any liability or responsibility whatsoever with regard to the communication services and any actions resulting from the user's participation in any communication service.</p>
                                    <p>Materials uploaded to a communication service may be subject to posted limitations on usage, reproduction and/or dissemination. User is responsible for keeping himself updated of and adhering to such limitations if they download the materials.</p>
                                    <p>When you register with www.icicisports.com, we or any of our partners/affiliate/group companies may contact you from time to time to provide the offers/information of such products/services that we believe may benefit you.</p>
                                    <h1>Termination/access restriction</h1>
                                    <p>Tissot energy reserves the right, in its sole discretion, to terminate the access to the website and the related services or any portion thereof at any time, without notice.</p>
                                    <h1>Fees payment</h1>
                                    <p>The user shall be liable to pay all applicable charges, fees, duties, taxes, levies and assessments for purchase of the bicycles/products from Tissot energy</p>
                                    <h1>User's obligations and user account</h1>
                                    <p>The user represent and confirm that the user is of legal age to enter into a binding contract and is not a person barred from availing the services under the laws of india or other applicable law.</p>
                                    <p>To avail a service through the website, the user has and must continue to maintain at his sole cost: (a) all the necessary equipments including a computer and modem etc. To access the website/avail services; (b) own access to the world wide web. The user shall be responsible for accessing the services and that access may involve third party fees including, airtime charges or internet service provider’s charges which are to be exclusively borne by the user.</p>
                                    <p>The user also understands that the services may include certain communications from Tissot Energy as service announcements and administrative messages. The user understands and agrees that the services are provided on an "as is" basis and that Tissot Energy does not assume any responsibility for deletions, mis-delivery or failure to store any user communications or personalized settings.</p>
                                    <p>The user agrees and undertakes at all times to be responsible for maintaining the confidentiality of the password and user id, and shall be fully responsible for all activities that occur by use of such password or user id. Further, the user agrees not to use any other party's under id and password for any purpose whatsoever without proper authorization from such party. You are responsible for the security of your password and for all transactions undertaken using your password through our service. You confirm that you are the authorized holder of the credit/debit card or the original account holder used in the transactions you make using the Tissot Energy . Tissot Energy will not be responsible for any financial loss, inconvenience or mental agony resulting from misuse of your id/password/credit card number/account details number for using Tissot Energy services.</p>
                                    <p>The user also agrees and undertakes to immediately notify Tissot Energy of any unauthorized use of the user's password or user id and to ensure that the user logs off at the end of each session at the website. Tissot Energy shall not be responsible for any, direct or indirect, loss or damage arising out of the user's failure to comply with this requirement.</p>
                                    <p>The user also agrees to: (a) provide true, accurate and complete information about himself and his beneficiaries as prompted by the registration form ("registration data") on the website; and (b) maintain and promptly update the registration data to keep it true, accurate, current and complete. If the user provide any information that is untrue, inaccurate, not current or incomplete or Tissot Energy has reasonable grounds to suspect that such information is untrue, inaccurate, not current or incomplete, Tissot Energy has the right to suspend or terminate the user's registration and refuse any and all current or future use of the website and/or any service.</p>
                                    <p>Furthermore, the user grants Tissot Energy the right to disclose to third parties registration data to the extent necessary for the purpose of carrying out the services.</p>
                                    <h1>Breach</h1>
                                    <p>Without prejudice to the other remedies available to Tissot Energy under this agreement, the tos or under applicable law, Tissot Energy may limit the user's activity, or end the user's listing, warn other users of the user's actions, immediately temporarily/indefinitely suspend or terminate the user's registration, and/or refuse to provide the user with access to the website if:</p>
                                    <ul>
                                        <li>The user is in breach of this agreement, the tos and/or the documents it incorporates by reference</li>
                                        <li>Tissot Energy is unable to verify or authenticate any information provided by the user, or</li>
                                        <li>Tissot Energy believes that the user's actions may infringe on any third party rights or breach any applicable law or otherwise result in any liability for the user, other users of the website and/or Tissot Energy</li>
                                    </ul>
                                    <p>Tissot Energy may at any time in its sole discretion reinstate suspended users. Once the user have been indefinitely suspended the user may not register or attempt to register with Tissot Energy or use the website in any manner whatsoever until such time that the user is reinstated by Tissot Energy. Notwithstanding the foregoing, if the user breaches this agreement, the tos or the documents it incorporates by reference, Tissot Energy reserves the right to recover any amounts due and owing by the user to Tissot Energy and to take strict legal action as Tissot Energy deems necessary.</p>
                                    <h1>Proprietary rights</h1>
                                    <p>
                                    Tissot Energy may provide the user with content such as sound, photographs, graphics, video or other material contained in advertisements or information. This material may be protected by copyrights, trademarks or other intellectual property rights and laws. The user may use this material only as expressly authorized by Tissot Energy and shall not copy, transmit or create derivative works of such material without express authorization from Tissot Energy
                                    </p>
                                    <p>
                                    The user acknowledges and agrees that they shall not upload, post, reproduce or distribute any content on or through the website that is protected by copyright or other proprietary right of a third party, without obtaining the permission of the owner of such right. Any copyrighted or other proprietary content distributed on or through the website with the consent of the owner must contain the appropriate copyright or other proprietary rights notice. The unauthorized submission or distribution of copyrighted or other proprietary content is illegal and could subject the user to personal liability or criminal prosecution.
                                    </p>
                                    <h1>Relationship</h1>
                                    <p>None of the provisions of this agreement, terms and conditions, notices or the right to use the website by the user contained herein or any other section or pages of the website and/or the linked sites, shall be deemed to constitute a partnership between the user and Tissot Energy and no party shall have any authority to bind or shall be deemed to be the agent of the other in any way. It may be noted, however, that if by using the website, the user authorizes Tissot Energy and its agents to access third party sites designated by them or on their behalf for retrieving requested information, the user shall be deemed to have appointed Tissot Energy and its agents as their agent for this purpose.</p>
                                    <h1>Headings</h1>
                                    <p>The headings and subheadings herein are included for convenience and identification only and are not intended to describe, interpret, define or limit the scope, extent or intent of this agreement, the tos or the right to use the website by the user contained herein or any other section or pages of the website or any linked sites in any manner whatsoever.</p>
                                    <h1>Interpretation of number and genders</h1>
                                    <p>The terms and conditions herein shall apply equally to both the singular and plural form of the terms defined. Whenever the context may require, any pronoun shall include the corresponding masculine and feminine. The words "include", "includes" and "including" shall be deemed to be followed by the phrase "without limitation". Unless the context otherwise requires, the terms "herein", "hereof", "hereto", "hereunder" and words of similar import refer to this agreement as a whole.</p>
                                    <h1>Indemnification and limitation of liability</h1>
                                    <p>The user agrees to indemnify, defend and hold harmless Tissot Energy from and against any and all losses, liabilities, claims, damages, costs and expenses (including legal fees and disbursements in connection therewith and interest chargeable thereon) asserted against or incurred by Tissot Energy that arise out of, result from, or may be payable by virtue of, any breach or non-performance of any representation, warranty, covenant or agreement made or obligation to be performed by the user pursuant to this agreement and/or the tos</p>
                                    <p>In no event shall Tissot Energy , its officers, directors, employees, partners or vendors be liable to user, t or any third party for any special, incidental, indirect, consequential or punitive damages whatsoever, including those resulting from loss of use, data or profits, whether or not foreseeable or whether or not Tissot Energy has been advised of the possibility of such damages, or based on any theory of liability, including breach of contract or warranty, negligence or other tortious action, or any other claim arising out of or in connection with user’s purchase of the services herein.</p>
                                    <p>Tissot Energy shall not assume any liability for the non-availability of the bicycles/products/services where required or any action or inaction that might be taken by any third party/vendor of Tissot Energy.</p>
                                    <h1>Severability</h1>
                                    <p>If any provision of this agreement is determined to be invalid or unenforceable in whole or in part, such invalidity or unenforceability shall attach only to such provision or part of such provision and the remaining part of such provision and all other provisions of this agreement shall continue to be in full force and effect.</p>
                                    <h1>Termination of agreement and services</h1>
                                    <p>Either the user or Tissot Energy may terminate this agreement and a service with or without cause at any time to be effective immediately.
                                    The user agrees that Tissot Energy may under certain circumstances and without prior notice, immediately terminate the user's user id and access to the website. Causes for termination may include, but shall not be limited to, breach by the user of this agreement or the tos, requests by enforcement or government agencies, requests by the user, non-payment of fees owed by the user in connection with the services as specified in the applicable tos.
                                    </p>
                                    <p>
                                    This agreement may be terminated by either the user or Tissot Energy through a written notice to the other. Tissot Energy shall not be liable to the user or any third party for termination of any service. Should the user object to any terms and conditions of this agreement, any tos or become dissatisfied with the service in any way, the user's only recourse is to immediately: (a) discontinue use of the website; and (b) notify Tissot Energy of such discontinuance.
                                    </p>
                                    <p>Upon termination of the service, user's right to use the website shall immediately cease. The user shall have no right and Tissot Energy shall have no obligation thereafter to execute any of the user's uncompleted tasks or forward any unread or unsent messages to the user or any third party. Once the user's registration or the services are terminated, cancelled or suspended, any data that the user has stored on the website may not be retrieved later.</p>
                                    <h1>Notices</h1>
                                    <p>All notices and communications (including those related to changes in the tos, service, termination of service etc.,) shall be in writing, in english and shall deemed given if delivered personally or by commercial messenger or courier service, or mailed by registered or certified mail (return receipt requested) or sent via email/facsimile (with acknowledgment of complete transmission) to the following address:</p>
                                    <ul>
                                        <li>If to Tissot Energy , at support@icicisports.com and/or at the address posted on the website</li>
                                        <li>If to a registered user, at the communication and/or email address specified in the registration form. Notice shall be deemed to have been served 48 hours after it has been sent, dispatched, displayed, as the case may be, unless, where notice has been sent by email, it comes to the knowledge of the sending party, that the email address is invalid.</li>
                                    </ul>
                                    <h1>Governing law</h1>
                                    <p>This agreement and each tos shall be governed by and constructed in accordance with the laws of india without reference to conflict of laws principles and disputes arising in relation hereto shall be subject to the exclusive jurisdiction of the courts of sri ganganagar,rajasthan</p>
                                    <h1>Users responsibilities & liability</h1>
                                    <p>User shall be responsible for their own actions in utilizing the website by the user, and Tissot Energy shall not be liable for any such action.</p>
                                    <p>User represents that user is of legal age to form a binding contract with Tissot Energy and is not a person barred from receiving services under the laws as applicable in india.</p>
                                    <p>User confirms that Tissot Energy shall not be responsible for any deficiency in payment of consideration payable.</p>
                                    <p>The user hereby consents, expresses and agrees that he has read and fully understands the terms and conditions under this agreement of Tissot Energy  the user further consents that the terms and contents of such privacy policy are acceptable to him. In general:</p>
                                    <ul>
                                        <li>Tissot  Energy reserves the right at all times to disclose any information as is necessary to satisfy or comply with any applicable law, regulation, legal process or governmental request, or to edit, refuse to post or to remove any information or materials, in whole or in part, in Tissot Energy 's sole discretion.</li>
                                        <li>When user registers With Tissot Energy , Tissot Energy or any of its vendor/partners/affiliate/group companies may contact user from time to time to provide the offers/information of such services.</li>
                                    </ul>
                                    <h1>Suspension/Termination</h1>
                                    <p>Without prejudice to the other remedies available to Tissot Energy under this agreement, or under applicable law, tissot energy may limit the user's activity, or end the user's listing, warn other users of the user's actions, immediately temporarily/indefinitely suspend or terminate the user's registration, and/or refuse to provide the user with access to the website if: the user is in breach of this agreement and/or the documents it incorporates by reference; tissot energy is unable to verify or authenticate any information provided by the user; or tissot energy believes that the user's actions may infringe on any third party rights or breach any applicable law or otherwise result in any liability for the user, other users of the website and/or Tissot Energy</p>
                                    <p>Tissot energy may at any time in its sole discretion reinstate suspended users. Once the user have been suspended the user may not register or attempt to register with Tissot Energy or use the website in any manner whatsoever until such time that the user is reinstated By Tissot Energy.</p>
                                    <p>Not withstanding the foregoing, if the user breaches this agreement or the documents it incorporates by reference, tissot energy reserves the right to recover any amounts due and owing by the user to tissot energy and to take strict legal action As Tissot Energy deems necessary.</p>
                                    <h1>Disclaimer</h1>
                                    <p>Tissot Energy makes no representations or warranties whatsoever about, and shall not be liable for, the vendor or any such third parties, their services, including representations relating to non-infringement of third party intellectual property rights. Any transactions that user may have with such third parties are at users own risk. Tissot Energy does not accept any responsibility for the same. Tissot Energy also does not accept any responsibility for the services availed by user.</p>
                                    <p>Tissot energy specifically disclaims any liability with regard to any deficiency of service availed by user and Tissot Energy shall not assume any liability if the service availed by user is not exactly as per specifications.</p>
                                    <h1>Governing Law</h1>
                                    <p>These terms & conditions and the relationship between user and Tissot Energy shall be governed in accordance with the laws of india without reference to conflict of laws principles.</p>
                                    <p>Tissot energy specifically disclaims any liability with regard to any deficiency of service availed by user and Tissot Energy shall not assume any liability if the service availed by user is not exactly as per specifications.</p>
                                    <p>User agree that all claims, differences and disputes arising under or in connection with or in relation to the terms & conditions or any transactions entered into on or through the marketplace or the relationship between user and Tissot Energy shall be subject to the exclusive jurisdiction of the courts at sri ganganagar,jaipur (rajasthan) and user hereby accede to and accept the jurisdiction of such courts.</p>
                                    <p>All linked terms and conditions hereunder are assumed to be read, understood and agreed by user.
                                    Please read the terms and conditions carefully before availing any services on the marketplace. Any service availed by the user through this marketplace shall signify users’ acceptance of the terms & conditions and shall be legally bound by the same.
                                    In addition to the foregoing, user shall also be bound by additional terms of offer for service issued by the vendor at the marketplace. If there is any conflict between the terms & conditions of the marketplace and the additional vendor terms, the additional terms shall take precedence in relation to that service.
                                    If the user does not agree with the terms of offer for service, he /she may not access the marketplace.
                                    </p>
                                </div>}
                                
                                {sidebar === 'cancel' && 
                                <div className={classes.adminSidebar}>
                                    <p>All bicycles/products sold through Tissot Energy are put through stringent and thorough quality checks prior to the same being shipped to you. Tissot Energy only ships original products to ensure complete satisfaction of usage for the bicycle/product ordered by you. Cancellation/refund shall be entertained only based on the below mentioned circumstances.</p>
                                    <p>TRANSIT RELATED DAMAGES - In case of any transit damage to the bicycle/product, upon the same being delivered to you, you shall intimate the same to Tissot Energy within 24 (Twenty Four) hours of initial receipt of the same. For the purpose of verification of the claim, the requirements as listed below by shall be mailed to support@tissotenergy.com for Tissot Energy to verify:</p>
                                    <ul>

                                        <li>picture/video (in case of moving parts) of the damage;</li>
                                        <li>invoice copy of the bicycle/product; and</li>
                                        <li>
                                        Picture of the picture frame number on the bicycle.
                                        </li>
                                    </ul>
                                    <p>Tissot Energy shall assess the extent of damage to the bicycle/product and shall take best efforts to ensure the same is rectified to your satisfaction, either by replacing the damages part or reimbursing cost of service to you. If such damage cannot be rectified, TISSOT ENERGY shall process the return of the product and replace the bicycle/product (or) refund the money paid by you.</p>
                                    <p>WARRANTY CLAIMS - For any warranty related issues that may arise with respect to any bicycle/product upon the same being delivered to you and being communicated to Tissot Energy with the following information to support@tissotenergy.com:</p>
                                    <ul>
                                        <li>picture/video of the part in question;</li>
                                        <li>invoice copy of the bicycle/    product; </li>
                                        <li>Picture of the picture frame number on the bicycle</li>
                                    </ul>
                                    <p>Tissot Energy shall, taking into consideration the warranty terms set out by each brand, liaise with such brand to address the issue on a best effort basis. Any costs related to the procurement and supply of the replacement part/product in question shall be shipped to you free of cost. If such issue cannot be Tissot Energy shall process the return of the product and replace the bicycle/product (or) refund the money paid by you</p>
                                    <p>FURTHER STIPULATIONS: - If you still wish to proceed and cancel your order, a nominal cancellation charge of Rs. 1,200/- (Rupees One Thousand Two Hundred only) along with a transaction reversal fee of 2% (Two Percent) of the amount paid will be deducted prior to processing the refund to you. This shall be at the sole discretion of the Tissot Energy Customer Support Team. If the product has been shipped either from the brand's warehouse or from Tissot Energy's warehouse prior to raising a cancellation request, the same will not be entertained.</p>
                                    <p>REFUND PROCESS - In case a refund is approved by Tissot Energy, the mode of your refund to be processed depends on your original payment method. If you have paid by credit/debit card/internet banking, refunds will be sent to the respective bank within 5 (Five) to 7 (Seven) business days of receipt of the returned item or cancellation request. Please contact your bank with questions about when the credit will be posted to your account. For further queries, you can contact support@tissotenergy.com.</p>
                                    <p>If the product ordered is not available with the brand for any unforeseen circumstances, Tissot Energy will offer a 100% refund to the customer through the Original Mode of Payment.</p>
                                </div>}

                                {sidebar === 'return' && 
                                <div className={classes.adminSidebar}>
                                        <p>ARE THE PRODUCTS PURCHASED THROUGH WWW.ICICISPORTS.COM GENUINE, AND ARE THERE A MANUFACTURERS’ WARRANTY FOR THE SAME?</p>
                                        <article>www.icicisports.com (“TISSOT ENERGY”) sells only products that are original /genuine, and are covered under warranty provided by the manufacturer/brand of the particular product</article>
                                        <p>IF THERE IS AN ISSUE WITH MY BICYCLE AND SPORTS GOODS, DOES TISSOT ENERGY TAKE RESPONSIBILITY?</p>
                                        <article>Upon delivery and unboxing of the bicycle/product, if you find any defect, you should intimate TISSOT ENERGY regarding the same day immediately without any delay. TISSOT ENERGY shall, take all reasonable efforts to rectify the same in conjunction with the respective brand/manufacturer. The final solution/course of action is at the sole discretion of TISSOT ENERGY.</article>
                                        <p>DOES WARRANTY COVER ALL THE PARTS OF MY CYCLE/PRODUCT?</p>
                                        <article>The terms and condition of warranty for any part of the bicycle and sports product vary for each brand/manufacturer. The same shall be available on their respective website. In case of any warranty claim, TISSOT ENERGY shall provide all reasonable assistance for your claim/communications between you and the brand/manufacturer.</article>
                                        <p>WHAT IF THE BICYCLE/PRODUCT I HAVE RECEIVED IS DEFECTIVE?</p>
                                        <article>TISSOT ENERGY undertakes a rigorous ’23-Point’ checklist on every bicycle once the same has been fully fitted to ensure that there are no damages/defects to the bicycle prior to shipping the same to you.
                                        In case of any manufacturing defect that is noticed upon delivery of the bicycle/product, the same shall have to be raised with the respective brand/manufacturer through TISSOT ENERGY, and TISSOT ENERGY shall extend all reasonable assistance in this regard.
                                        </article>
                                        <article>In case of any damage during transit, you shall intimate us within 24 hours of receiving the bicycle/product, and provide pictorial evidence of the damage to the same. The bicycle/product shall be in an unused condition at the time of intimating us regarding such damage. Upon receipt of your complaint, TISSOT ENERGY shall forward the same to the transit partner and seek a resolution for the issue.
                                        Any request for the return of the bicycle/product shall be at the sole discretion of TISSOT ENERGY. In case of a return being approved by TISSOT ENERGY, all items must be returned in their original condition along with the following:
                                        </article>
                                        <ul>
                                            <li>Original invoice from TISSOT ENERGY</li>
                                            <li>User manual and other documents</li>
                                            <li>Accessories provided at the time of sale of the bicycle</li>
                                            <li>The original box, intact, along with the packaging as delivered</li>
                                        </ul>
                                        <article>TISSOT ENERGY shall have the right to reject the return pickup if the items are not returned according to the above mentioned.
                                        Any other damages that may have occurred to the bicycle shall be your responsibility. The same shall also not apply to normal wear and tear, nor to defects, malfunctions or failures that result from the abuse, neglect, improper maintenance, alteration, modification, accident, or misuse of the bicycle/product. However, TISSOT ENERGY will advise you regarding rectification of the said issue. Please contact our support team at support@icicispots.com
                                        </article>
                                </div>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </>
            </>
    )
}
export default Condition