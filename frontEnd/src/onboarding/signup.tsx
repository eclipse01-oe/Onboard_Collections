import { Link } from 'react-router-dom';
import { FaCartPlus, FaUser} from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { RiLockPasswordLine } from 'react-icons/ri';
import { BiSolidHide, BiShow } from 'react-icons/bi';
import { FaRegUser } from 'react-icons/fa';
import styles from '../styles/onboard.module.css';
import { MdOutlineAttachEmail } from 'react-icons/md';

const Signup = () => {
  return (
    <div className={`${styles.onboardingCon} container`}>
        <div className={styles.formContainer}>
            <div style={{marginBottom: '1rem', textAlign: 'center'}}>
              <FaCartPlus className={styles.onboardCart}/>
              <p style={{textAlign: 'center'}}>Register to get started</p>
            </div>

            <form className={styles.form}>
                <label htmlFor="firstName">First Name</label>
                <div className={styles.inputDiv}>
                    <FaRegUser className={styles.inputIcon}/>
                    <input id="firstName" name="firstName" type="text" />
                </div>

                <label htmlFor="lastName">Last Name</label>
                <div className={styles.inputDiv}>
                    <FaRegUser className={styles.inputIcon}/>
                    <input id="lastName" name="lastName" type="text" />
                </div>

                <label htmlFor="username">Username</label>
                <div className={styles.inputDiv}>
                    <FaRegUser className={styles.inputIcon}/>
                    <input id="username" name="username" type="text" />
                </div>

                <label htmlFor="email">Email</label>
                <div className={styles.inputDiv}>
                    <MdOutlineAttachEmail className={styles.inputIcon}/>
                    <input id="email" name="email" type="email" />
                </div>

                <label htmlFor="password">Password</label>
                <div className={styles.inputDiv}>
                    <RiLockPasswordLine className={styles.inputIcon}/>
                    <input id="password" name="password" type="password" />
                    <BiSolidHide className={styles.passwordEye}/>
                </div>

                <label htmlFor="confirmPassword">Confirm Password</label>
                <div className={styles.inputDiv}>
                    <RiLockPasswordLine className={styles.inputIcon}/>
                    <input id="confirmPassword" name="confirmPassword" type="password" />
                    <BiSolidHide className={styles.passwordEye}/>
                </div>

                <button type="submit" style={{marginTop: '10px', height: '2.5rem'}}>SIGN UP</button>
            </form>

            <div className={styles.googleAut}>
                <a href='http://www.google.com'>
                    <FcGoogle style={{color: 'white', width: '50px', height: '25px'}}/>
                </a>
            </div>

            <div>
                <p>click <Link to="/login" className='a'>here</Link> to login if you already have an account</p>
            </div>

            <div>
                <p>By Onboarding, you are agreeing to our terms and conditions.</p>
            </div>
        </div>
        
    </div>
  );
};

export default Signup;