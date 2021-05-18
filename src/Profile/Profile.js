import React from 'react';
import '../App.css';
import PropTypes from 'prop-types';
const Profile =({name,lastname,bio,profession,children,alertMe}) =>
{
return (

    <div>
        {children}
        <h1 className="MP"> My Profile</h1>
        <h1> My name is {name} an my last name is {lastname}</h1>
        <h2 className="Bio">{bio}</h2>
        <h1>I'm a {profession}</h1>
        <button onClick={alertMe}> click me</button>
        </div>
);

}
 Profile.defaultProps=
{
    profession :"GOMYCODE Candidate"
} 
Profile.propTypes=
{
name:PropTypes.string,
lastname:PropTypes.string,
bio:PropTypes.string,
profession:PropTypes.string

}
export default Profile;
