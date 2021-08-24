import React, { useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import Modal from '@material-ui/core/Modal';
import './landing_page.css';
import ContactCard from '../../components/contact_card';
import Body from '../../components/modal'



const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  root: {
    minWidth: 275,
    flexGrow: 1,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
}));


export default function LandingPage() {
    const classes = useStyles();
 

const contact_list = [
    {
        "id": "1",
        "name": "Leanne Graham",
        "email": "Sincere@april.biz",
        "phone": "1-770-736-8031 x56442",
        "website": "http://hildegard.org",
        "url": "https://avatars.dicebear.com/v2/avataaars/Bret.svg?options[mood][]=happy",
        "fav": false
    },
    {
        "id": "2",
        "name": "Ervin Howell" ,
        "email": "Shanna@melissa.tv",
        "phone": "010-692-6593 x09125",
        "website": "http://anastasia.net",
        "url": "https://avatars.dicebear.com/v2/avataaars/Antonette.svg?options[mood][]=happy",
        "fav": false
    },
    {
        "id": "3",
        "name": "Clementine Bauch",
        "email": "Nathan@yesenia.net",
        "phone": "1-463-123-4447",
        "website": "ramiro.info",
        "url": "https://avatars.dicebear.com/v2/avataaars/Samantha.svg?options[mood][]=happy",
        "fav": false
    },
    {
        "id": "4",
        "name": "Patricia Lebsack",
        "email": "Julianne.OConner@kory.org",
        "phone": "493-170-9623 x156",
        "website": "http://kale.biz",
        "url": "https://avatars.dicebear.com/v2/avataaars/Karianne.svg?options[mood][]=happy",
        "fav": false
    },
    {
        "id": "5",
        "name": "Chelsey Dietrich",
        "email": "Lucio_Hettinger@annie.ca",
        "phone": "(254)954-1289",
        "website": "http://demarco.info",
        "url": "https://avatars.dicebear.com/v2/avataaars/Kamren.svg?options[mood][]=happy",
        "fav": false
    },
    {
        "id": "6",
        "name": "Mrs. Dennis Schulist",
        "email": "Karley_Dach@jasper.info",
        "phone": "1-477-935-8478 x6430",
        "website": "http://ola.org",
        "url": "https://avatars.dicebear.com/v2/avataaars/Leopoldo_Corkery.svg?options[mood][]=happy",
        "fav": false
    },
    {
        "id": "7",
        "name": "Kurtis Weissnat",
        "email": "Telly.Hoeger@billy.biz",
        "phone": "210.067.6132",
        "website": "http://elvis.io",
        "url": "https://avatars.dicebear.com/v2/avataaars/Elwyn.Skiles.svg?options[mood][]=happy",
        "fav": false
    },
    {
        "id": "8",
        "name": "Nicholas Runolfsdottir V",
        "email": "Sherwood@rosamond.me",
        "phone": "586.493.6943 x140",
        "website": "http://jacynthe.com",
        "url": "https://avatars.dicebear.com/v2/avataaars/Maxime_Nienow.svg?options[mood][]=happy",
        "fav": false
    },
    {
        "id": "9",
        "name": "Glenna Reichert",
        "email": "Chaim_McDermott@dana.io",
        "phone": "(775)976-6794 x41206",
        "website": "http://conrad.com",
        "url": "https://avatars.dicebear.com/v2/avataaars/Delphine.svg?options[mood][]=happy",
        "fav": false
    },
    {
        "id": "10",
        "name": "Clementina DuBuque",
        "email": "Rey.Padberg@karina.biz",
        "phone": "024-648-3804",
        "website": "http://ambrose.net",
        "url": "https://avatars.dicebear.com/v2/avataaars/Moriah.Stanton.svg?options[mood][]=happy",
        "fav": false
    }
]


const [contacts, setContacts] = useState(contact_list);
// const [activeBtn, setActiveBtn] = useState(false);
const [open, setOpen] = useState(false);
const [userContact, setNewContact] = useState({})

const [favorites, setFavourites] = useState([])




  const handleOpen = (result) => {
    setNewContact(result)
 
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const EditContact = (e) =>{

    e.preventDefault();

    let temp_contacts = contacts;
    
   let contact_ind = temp_contacts.findIndex( (res) => {return res.id === userContact.id});

  //  setNewContact({...userContact, fav: true})

   temp_contacts[contact_ind] = userContact;

   setContacts(temp_contacts);
   console.log(temp_contacts)
   handleClose();

  }



// const favContact = (index,result) => {
//   const state = favorites.some((fav) => { return fav == result.id })
//   if(state){
//     const temp = [...favorites]

//     temp.splice(index, 1)
//     setFavourites(temp)
//   }
//   else{
//      setFavourites([...favorites, result])
//   }
 
// }


const deleteContact = (index)=> {

    const temp = [...contacts]

    temp.splice(index, 1)
    setContacts(temp)
}




  return (
      <div className="contact-container">
          
     
     <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
      >
       
           <Body EditContact={EditContact} handleClose={handleClose} userContact={userContact} setNewContact = {setNewContact}/>
       
   
      </Modal> 
      
         <div className={classes.root}>  
      </div>
      { favorites.map((x, index) => {return  <h1 key={index}>{x}</h1>})}
     
        <Grid container spacing={3}>
        {
            contacts.map( (result, index) => {

           return <Grid key={index} item xs={12} sm={4} md={3}>
           <ContactCard favorites={favorites} classes ={classes} index={index} result={result}  handleOpen = {handleOpen} deleteContact ={deleteContact}/>
           </Grid>
   
     
            })
        }
    </Grid>
    </div>
  );
}
