
import React, { Component } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import styles from './captcha.module.css'; 

class CaptchaComponent extends Component {
    componentDidMount() {
        loadCaptchaEnginge(6);
    }

    doSubmit = () => {
        const userCaptchaValue = this.userCaptchaInput.value;

        if (validateCaptcha(userCaptchaValue)) {
            alert('Captcha Matched');
        } else {
            alert('Captcha Does Not Match');
        }
    };

    render() {
        return (
            <div className={styles.captch}>
            <div className={styles.captcha}>
                <LoadCanvasTemplate />
                <input type="text" ref={input => this.userCaptchaInput = input} className={styles.input} />
                <div className={styles.space}></div>
            </div>
            </div>
        );
    }
}

export default CaptchaComponent;
