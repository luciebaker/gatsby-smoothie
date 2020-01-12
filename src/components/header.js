import { Link, navigate } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import PropTypes from "prop-types"
import React, {useContext} from "react"
import {FirebaseContext} from './Firebase'
import styled from 'styled-components'
import logo from '../images/Smooth.png'

const LogoutLink = styled.span`
  color: white;
  cursor: pointer;
  &:hover {
    color: #F79F33;
  }
`
const HeaderWrapper = styled.header`
  background: #BF4065;
  margin-bottom: 0;
`
const HeaderContent = styled.div`
  margin: 0;
  max-width: 1400px;
  padding: .4rem 1.5rem;
  display: flex;
  >h1 {
    margin: 0;
    flex-grow: 1;
    >a {
      color: white;
      cursor: pointer;
      text-decoration: none;
      &:hover {
      color: #FF5E0F;
      }

      >img {
      max-width: 140px;
      margin: 0;
      padding-left: 1rem;
      }
    }
  }
  
  >div {
    margin: auto 0;
  }
`
const UserInfo = styled.div`
  text-align: right;
  color: white;
`
const LoginLink = styled.div`
  margin: auto 0;
  a{
    color: white;
    &:hover {
      color: #F79F33;
      }
  }
`
const Divider = styled.span`
  margin: 0 8px;
  padding-right: 1px;
  background: #fff;
`

const Header = ({ siteTitle }) => {
  const {firebase, user} = useContext(FirebaseContext)
  console.log(firebase, user)

function handleLogoutClick() {
  firebase.logout().then(() => navigate('/'))
}

  return (
  <HeaderWrapper>
    <HeaderContent>
      <h1>
        <AniLink fade to="/">
          <img src={logo} alt="smooth" />
        </AniLink>
      </h1>
        <div>
          {!!user && !!user.email &&
        <UserInfo> 
        Hello, {user.username || user.email}
        <div>
        <LogoutLink onClick={handleLogoutClick}>
        Logout
        </LogoutLink>
        </div>
        </UserInfo>
        } 
        {(!user || !user.email) &&
        <LoginLink>
        <AniLink fade to="/login">Login</AniLink>
        <Divider />
        <AniLink fade to="/register">Register</AniLink>
        </LoginLink>
        }
        </div>
    </HeaderContent>
  </HeaderWrapper>
  )}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
