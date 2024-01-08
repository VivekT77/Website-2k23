import React from 'react'
// import { Link } from 'react-router-dom'
import "../styles/team.css"
import linkedInIcon from "../Assets/Icons/linkedIn.png"
import instaIcon from "../Assets/Icons/Insta.png"
import githubIcon from "../Assets/Icons/github.png"
import atharv_pande from "../Assets/Members/atharv_pande.png"
import { Link } from 'react-router-dom'


export function TeamMemberCard(props) {
  return <div className='Teammembercard'>
    <div className='profileImg' >
      <img src={props.profileImg} alt='profile' />
    </div>
    <div className='memberinfo'>
      <p className='name'>{props.name}</p>
      <p className='position'>{props.position}</p>
      <div className='MemberSocialLinks'>
        <Link to="#" >
          <img className='MemberSocialLinkicon' src={linkedInIcon} alt='logo' />
        </Link>
        <Link to="#" >
          <img className='MemberSocialLinkicon' src={instaIcon} alt='logo' />
        </Link>
        <Link to="#" >
          <img className='MemberSocialLinkicon' src={githubIcon} alt='logo' />
        </Link>
      </div>
    </div>
  </div>
}

function Team() {


  return (
    <div id='Team'>
      <h1>Team</h1>
      <div className='Teammembercards'>
        <TeamMemberCard name="Atharv Pande" position="position" profileImg={atharv_pande} />
        <TeamMemberCard name="Atharv Pande" position="position" profileImg={atharv_pande} />
        <TeamMemberCard name="Atharv Pande" position="position" profileImg={atharv_pande} />
        <TeamMemberCard name="Atharv Pande" position="position" profileImg={atharv_pande} />
        <TeamMemberCard name="Atharv Pande" position="position" profileImg={atharv_pande} />
        <TeamMemberCard name="Atharv Pande" position="position" profileImg={atharv_pande} />
      </div>
    </div>
  )
}

export default Team