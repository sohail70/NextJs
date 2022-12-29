import { NextPage } from "next";
import { useRouter } from "next/router";

const Customer: NextPage = ()=>{
    const router = useRouter();
    console.log(router);
    console.log(router.query.id); // ta balee ro check nakuni dar console nemifahmi ke bayad benvisi router.query.id
    const {id} = router.query; //destructure

    return <h1>Customer {id}</h1>
};

export default Customer;