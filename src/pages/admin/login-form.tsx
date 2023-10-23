import { useRouter } from "next/router";
import { useState } from "react";
import { FormEvent } from "react";
import axios from "axios";

export default function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();
    const handleClick = () => 
    {
      router.push('/admin/add');
    }
    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try
        {
          const res = await axios.post(`${process.env.SERVER_URL}/admin/signin`,{'email':email,'password':password},{withCredentials: true, headers:{"Content-Type":"application/json"},});
        }
        catch(error)
        {
            alert(`Invalid Credentials ${error}`);
        };
    };
    return (
        <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" onClick={handleClick}>Log In</button>
      </form>
    )
}