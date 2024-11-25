export const Profile = () => {
    return (
        <ul>
            <li>
                <ProfileCard name="Vandan" age={25} gretting={
                    <div>
                        <strong>Hello vandan , keep it up for better skills!</strong>
                    </div>
                }
                >

                        <p>Hobbies: Gaming , Cooking</p>
                        <button>Contact</button>

                </ProfileCard>
            </li>
        </ul>
    );
}
export default Profile;

function ProfileCard(props){
    // const {name,age,gretting}=props;
    const {name,age,gretting,children}=props;
    return (
        <>
            <h2>Name: {name}</h2>
            <p>Age: {age}</p>
            <div>Gretting:{gretting}</div>
            <div>{children}</div>
        </>
    );
}
