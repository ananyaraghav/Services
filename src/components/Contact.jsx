import React, {useState} from 'react'

const Contact = () => {
    const [data, setData] = useState({
        fullname: "",
        phone:"",
        email:"",
        msg:""
    })

    const InputEvent = (event) => {
        const { name, value } = event.target;

        setData((preVal) => {
            return {
                ...preVal,
                [name]: value,
            }
        })
    }

    const formSubmit = (e) => {
        e.preventDefault() 
        alert(
            `My name is ${data.fullname}, and I want to say ${data.msg}.`
        )
         
    }

    

    return ( 
        <>
        <div className="my-5">
            <div className="text-center">Contact Us</div>
        </div>
        <div className="container contact_div">
            <div className="row">
                <div className="col-md-6 col-10 mx-auto">
                <form onSubmit={formSubmit}>
                    <div class="mb-3">
                        <label for="exampleInputName1">Full Name</label>
                        <input 
                        type="text" 
                        class="form-control" 
                        id="exampleInputName1" 
                        name="fullname"
                        value={data.fullname}
                        onChange={InputEvent}
                        placeholder="Enter your name"
                        />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputNum1">Phone no.</label>
                        <input 
                        type="number" 
                        class="form-control" 
                        id="exampleInputNum1" 
                        name="phone"
                        value={data.phone}
                        onChange={InputEvent}
                        placeholder="Enter your phone number"
                        />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1">Email address</label>
                        <input 
                        type="email" 
                        class="form-control" 
                        id="exampleInputEmail1" 
                        name="email"
                        value={data.email}
                        onChange={InputEvent}
                        placeholder="name@example.com"
                        />
                    </div>
                    <div class="mb-3">
                        <label for="exampleTextArea1">Message</label>
                        <input 
                        type="text" 
                        class="form-control" 
                        id="exampleTextArea1" 
                        name="msg"
                        value={data.msg}
                        onChange={InputEvent}
                        />
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
                </div>
            </div>
        </div>
        </>
    );
};
export default Contact