import "./style.css"

import React from "react"

export default function Info() {
    return (
        <div>
            <img className="profile-photo" src="../images/profile.png" />
            <h1 className="person-name">Andika Putra Ariansyah</h1>
            <h3 className="profission">Mahasiswa Informatika</h3>
            <div className="websites">
                <a href="https://mail.google.com/mail/u/0/?view=cm&tf=1&fs=1&to=andikaputra2249@gmail.com" target="_blank" className="email">
                    <img src="../images/email-logo.png" />
                    <p>Email</p> 
                </a>
                <a href="https://wa.me/081232683112" target="_blank" className="whatsapp" >
                    <img src="../images/whatsapp-logo.png" />
                    <p>Whatsapp</p>            
                </a>
            </div>
        </div>
    )
}