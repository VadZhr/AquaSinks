import React, { useEffect, useState } from 'react'
import AdminService from '../service/adminService'
import { useDispatch, useSelector } from 'react-redux'
import { 
    setPhoneNumber,
    setEmail,
    setAddress,
    setInstagramLinki,
    setOzonLink,
    setKaspiLink,
    setSatuLink,
    setWildBerriesLink,
    setNumber,
    deleteNumber,
    setMainPhoneNumber,
    setPhoneOne,
    setPhoneTwo,
    setPhoneThree,
    getContacts,
    editContacts} from '../features/footer/footerSlice'
import './footer.css'
import UploadedFiles from '../components/uploadedFiles'



export default function Contacts() {
    const dispatch = useDispatch()
    const footerData = useSelector(state => state.footerSlice)

    useEffect(() => {   
        dispatch(getContacts())
    },[])   


    function submitFooterData(e){
        e.preventDefault()
        const contactData = {
            email: footerData.email ,            
            address: footerData.address,
            instagramLink: footerData.instagramLink,
            ozonLink: footerData.ozonLink,
            kaspiLink: footerData.kaspiLink,
            satuLink: footerData.satuLink,
            wildBerriesLink: footerData.wildBerriesLink,
            phoneOne: footerData.phoneOne,
            phoneTwo: footerData.phoneTwo,
            phoneThree: footerData.phoneThree,
        }
        console.log()
        dispatch(editContacts(contactData)).then(data => dispatch(getContacts()))
        
    }

    function addNumber(e){
        const key = e.key
        console.log(key)
        if(key == 'Enter'){
            dispatch(setPhoneNumber({number: '+'+footerData.aNumber, id: Date.now()}))
            dispatch(setNumber(''))
        }
    }

    function addNumberOnClick(e){
        e.preventDefault()
        dispatch(setPhoneNumber({number: '+'+footerData.aNumber, id: Date.now()}))
        dispatch(setNumber(''))
    }

    function deleteANumber(e,id){
        e.preventDefault()
        console.log(id)
        dispatch(deleteNumber(id))
    }

    function setPhoneNumberLocally(e, stateToChange){
        if(e.target.value.length > 11) return
        dispatch(stateToChange(e.target.value))
    }

  return (
    <>
    <section className='contact-info'>
        {/* <div className="row for-numbers" id='anchor' >
            <label htmlFor="numbers">Номера телефонов:</label>
            <input type="number" maxLength="11" autoComplete='false' name="" id="numbers" value={footerData.aNumber} onChange={(e) => setPhoneNumberLocally(e, setNumber)} onKeyDown={(e) => addNumber(e)}/>
            <button disabled={footerData.aNumber.length >= 11 ? false : true} onClick={(e) => addNumberOnClick(e)}>добавить</button>
            <div className="numbers-row" anchor="anchor">
                {footerData.phoneNumbers.map((el,i) => (
                    <div className='phone-number' key={i}>
                        <span>{el.number}</span>
                        <button onClick={(e) => deleteANumber(e, el.id)}></button>
                    </div>
                ))}
            </div>
        </div> */}
        <div className="row">
            <label htmlFor="">Телефон №1:</label>
            <input type="number" maxLength="11" autoComplete='false' name="" id="numbers" value={footerData.phoneOne} onChange={(e) => setPhoneNumberLocally(e, setPhoneOne)}/>
        </div>
        <div className="row">
            <label htmlFor="">Телефон №2:</label>
            <input type="number" maxLength="11" autoComplete='false' name="" id="numbers" value={footerData.phoneTwo} onChange={(e) => setPhoneNumberLocally(e, setPhoneTwo)}/>
        </div>
        <div className="row">
            <label htmlFor="">Телефон №3:</label>
            <input type="number" maxLength="11" autoComplete='false' name="" id="numbers" value={footerData.phoneThree} onChange={(e) => setPhoneNumberLocally(e, setPhoneThree)}/>
        </div>
        <div className="row">
            <label htmlFor="">Почта:</label>
            <input type="email" name="" id="email" value={footerData.email} onChange={(e) => dispatch(setEmail(e.target.value))}/>
        </div>
        <div className="row">
            <label htmlFor="address">Адресс:</label>
            <input type="text" name="" id="address" value={footerData.address} onChange={(e) => dispatch(setAddress(e.target.value))}/>
        </div>
        <div className="row">
            <label htmlFor="address">Instagram:</label>
            <input type="text" name="" id="address" value={footerData.instagramLink} onChange={(e) => dispatch(setInstagramLinki(e.target.value))}/>
        </div>
        <div className="row">
            <label htmlFor="address">Ozon:</label>
            <input type="text" name="" id="address" value={footerData.ozonLink} onChange={(e) => dispatch(setOzonLink(e.target.value))}/>
        </div>
        <div className="row">
            <label htmlFor="address">Kaspi:</label>
            <input type="text" name="" id="address" value={footerData.kaspiLink} onChange={(e) => dispatch(setKaspiLink(e.target.value))}/>
        </div>
        <div className="row">
            <label htmlFor="address">Satu:</label>
            <input type="text" name="" id="address" value={footerData.satuLink} onChange={(e) => dispatch(setSatuLink(e.target.value))}/>
        </div>
        <div className="row">
            <label htmlFor="address">WildBerries:</label>
            <input type="text" name="" id="address" value={footerData.wildBerriesLink} onChange={(e) => dispatch(setWildBerriesLink(e.target.value))}/>
        </div>
        <button className="admin-save-btn" onClick={(e) => submitFooterData(e)}>Сохранить</button>
    </section>
    <UploadedFiles isLoading={footerData.isLoading}/>
    
    </>
    
  )
}
