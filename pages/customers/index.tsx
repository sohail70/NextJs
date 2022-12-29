import { NextPage , GetStaticProps, InferGetStaticPropsType} from "next";


type Customer = {
    id: number
    name: string
    industry: string
}

export const getStaticProps: GetStaticProps = async (context) => { //this func only exist in the server ---> pas negranae code leak ya access token o ina nabash!
    return {
        props:{
            customers:[
                {
                    name: "John Smith",
                    industry: "Restaurant"
                },
                {
                    id: 2,
                    name: "Sal Brown",
                    industry: "Tech"
                }
            ] as Customer[]
        }
    }

}

// InferGetStaticPropstype ro az doc dar section getStaticProps gereftim ke niazi --> alan az customer be sorat directly use mikunim va niazi be use kardan az props nist vagarna bayad minveshtim props.customers --> in dango fang ha ham vase in bood ke be typescript befahmonim its a customer array hast
const Customer: NextPage = ({customers} : InferGetStaticPropsType<typeof getStaticProps>) => //mishe toye parantez props nevesht vali ma destructure mikunim --> m,onteha bayad typesho dar bala taeen kuni yani type Customer va dar paeenesh as customer[] array ro bezari
{
    // console.log(props);
    // console.log(customers);


    return (
        <>
            <h1>Customers</h1>
            {
                customers.map((customer: Customer)=>{
                    return (
                    <div>
                        <p>{customer.name}</p>
                        <p>{customer.industry}</p>
                        <p>{customer.id}</p>
                    </div>
                    )
                })
            }
        </>
    )
}

export default Customer;