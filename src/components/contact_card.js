import React from 'react'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import CallIcon from '@material-ui/icons/Call';
import LanguageIcon from '@material-ui/icons/Language';
import DeleteIcon from '@material-ui/icons/Delete';

export default function ContactCard({classes,index,result, handleOpen, deleteContact}){
    return(
        <Card className={classes.root} variant="outlined">
         <div className="img-div">
         <img src={result.url} alt="" width="200" height="200"/>
         </div>
         <CardContent style={{color: "#898989", padding:'24px'}}>
          <h3>{result.name}</h3>
        <div className="card-info">
          <MailOutlineIcon style={{fontSize : "1.2rem"}}/>
           <div style={{marginLeft: "10px", fontSize:"14px"}}>
               { result.email }
            </div>
        </div>
        <div className="card-info">
          <CallIcon style={{fontSize : "1.2rem"}}/>
           <div style={{marginLeft: "10px", fontSize:"14px"}}>
               { result.phone }
            </div>
        </div>
        <div className="card-info">
          <LanguageIcon style={{fontSize : "1.2rem"}}/>
           <div style={{marginLeft: "10px", fontSize:"14px"}}>
               { result.website } 
            </div>
        </div>     
         </CardContent>
         <CardActions className="action-div" style={{padding:"10px"}}>
            <div className="action-item">
            <FavoriteBorderOutlinedIcon style={{cursor:"pointer",color: "red",fontSize : "1.4rem"}}/>
             {/* {
             favorites.some((fav) => { return fav == result.id }) ? 
             
             <FavoriteIcon onClick={ () => {likeContact(index,result)}  } style={{cursor:"pointer",color: "red",fontSize : "1.4rem"}}/> :
                    <FavoriteBorderOutlinedIcon onClick={ () => {likeContact(index, result)} } style={{cursor:"pointer",color: "red",fontSize : "1.4rem"}}/>
                } */}
         
            </div> 
            <div className="action-item">
          <EditOutlinedIcon onClick={()=>{handleOpen(result)}} className="card-icon" />
            </div> 
            <div className="action-item">
          <DeleteIcon onClick={()=>{deleteContact(index)}} className="card-icon" />
            </div> 
         </CardActions>
         
       </Card>
    )
}