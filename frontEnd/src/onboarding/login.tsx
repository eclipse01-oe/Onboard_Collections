import { FaCartArrowDown, FaGooglePlus} from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { BiSolidHide, BiShow } from 'react-icons/bi';
import { FaRegUser } from 'react-icons/fa';
import { RiLockPasswordLine } from 'react-icons/ri';
import styles from '../styles/onboard.module.css';


const Login = () => {
  return (
    <div className={`${styles.onboardingCon} container`}>
        <div className={styles.formContainer}>
            <div style={{marginBottom: '1rem', textAlign: 'center'}}>
              <FaCartArrowDown className={styles.onboardCart}/>
              <p style={{textAlign: 'center'}}>Login to get started</p>
            </div>

            <form className={styles.form}>

              <label htmlFor="email-username">Email/Username</label>
              <div className={styles.inputDiv}>
                <FaRegUser className={styles.inputIcon}/>
                <input id="email-username" name="email-username" type="text" />
              </div>

              <label htmlFor="password">Password</label>
              <div className={styles.inputDiv}>
                <RiLockPasswordLine className={styles.inputIcon}/>
                <input id="password" name="password" type="password" />
                <BiSolidHide className={styles.passwordEye}/>
              </div>

              <button type="submit" style={{marginTop: '10px', height: '2.5rem'}}>LOGIN</button>
            </form>

            <div className={styles.googleAut}>
                <a href='http://www.google.com'>
                    <FcGoogle style={{color: 'white', width: '50px', height: '25px'}}/>
                </a>
            </div>

            <div>
                <p>not a user yet? click <a href="/">here</a> to get started</p>
            </div>

            <div>
                <p>By logging in, you are agreeing to our terms and conditions.</p>
            </div>
        </div>
        
    </div>
  );
};

export default Login