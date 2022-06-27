import {InterlocutorsData} from "../../StorageData/InterlocutorsData";
import './Interlocutors.scss'
import watchedLogo from '../../image/chat/watched.svg'
import notWatchedLogo from '../../image/chat/not-watched.svg'
import {NavLink} from "react-router-dom";
const Interlocutors = ({setDialog}) => {
  return(
      <div className="interlocutors">
          {InterlocutorsData.map(person => {
              return (
               <NavLink to={`/chat/${person.id}`} key={person.id} className="interlocutors-person"
                    onClick={() => {setDialog(person)}}>
                   <div className="interlocutors-main-container">
                       <img src={person.img} alt=""/>
                       <div className="interlocutors-content">
                           <p className="interlocutors-name">
                               {person.name}
                           </p>
                           <span className="interlocutors-last-message">
                       {person.lastMessage}
                   </span>
                           <span className="interlocutors-wasOnline">
                       {person.wasOnline}
                   </span>
                       </div>
                   </div>
                   <img className="interlocutors-watched"
                        src={person.watched? watchedLogo : notWatchedLogo} alt=""/>
               </NavLink>
              )
          })}
      </div>
  )
}

export default Interlocutors