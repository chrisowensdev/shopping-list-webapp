import { useState } from 'react';
import { Link } from 'react-router-dom';
// import axios from 'axios';
import styled from 'styled-components';

const Form = styled.form`
    /* border: 1px solid black; */
    display: flex;
    flex-direction: column;
    margin: 10px auto;
    background-color: #1871a1;
`;

const Input = styled.input`
    margin: 10px auto;
    padding: 10px;
    width: 85%;
    border-radius: 4px;
    border: 1px solid black;
`;

const Button = styled.button`
    display: block;
    margin: 10px auto;
    padding: 10px;
    border-radius: 4px;
    border: 1px solid black;
`;

const SignUp = (props) => {
    // const { setUser } = props;
    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    // const history = useHistory();

    const handleSignUp = async (e) => {
        e.preventDefault();
        const data = {
            email,
            firstName,
            lastName,
        };
        console.log(data);
        // const response = await axios.post(
        //     `${process.env.REACT_APP_SERVER}/users/signup`,
        //     data
        // );
        // if (response.status === 201) {
        //     setUser(response.data.user);
        //     history.push('/');
        // }
    };
    return (
        <>
            <h1>Sign Up</h1>
            <Form onSubmit={handleSignUp}>
                <Input
                    type='email'
                    name='email'
                    id='email'
                    placeholder='Email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <Input
                    type='text'
                    name='first-name'
                    id='first-name'
                    placeholder='First Name'
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                />
                <Input
                    type='text'
                    name='last-name'
                    id='last-name'
                    placeholder='Last Name'
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                />
                <Button>Sign Up</Button>
            </Form>
            <p>
                Already a user? <Link to='/signin'>Sign In</Link>
            </p>
        </>
    );
};

export default SignUp;
