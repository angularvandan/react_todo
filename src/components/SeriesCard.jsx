// import "./Netflix.css";
import styles from "./Netflix.module.css";
import styled from 'styled-components';
// export const SeriesCard = ({data}) => { destructuring

//when i use backtic then for dynamic class need props
const ButtonVandan1=styled.button`
    color: ${(props)=> props.rating>=8.5? '':'yellow'};
`;
const Raiting=styled.h3`
    font-size:1.6rem;
    color: #fffff;
    text-transform:capitalize;
`;

export const SeriesCard = (props) => {
    console.log(props)
    const { data } = props;
    const ratingClass=data.rating>=8.5? styles['super-hit'] : styles.average;

    //this is  using literls put dynamic vaue
    const ButtonVandan=styled.button({
        color: `${data.rating>=8.5? '':'yellow'}`,
    });

    

    const buttonStyle={
        // color: "var('color')",
        color: `${data.rating>=8.5? '':'yellow'}`,
    }

    return (
        <li className={styles['card-shadow']} key={data.id}>
            <div className={styles.cardDetails}>
                <img src={data.img_url} alt="image" width="100%" height="100%" />
                <h2 className={styles['read-theDocs']}>{props.data.name}.</h2>
                {/* <h3><span className={`rating ${data.rating>=8.5? 'super-hit':'average'}`}>Rating: {data.rating}</span></h3> */}
                <Raiting>Rating: <span className={`${styles.rating} ${ratingClass}`}>{data.rating}</span></Raiting>
                <p className="text-lg font-medium leading-5" style={{ marginBottom: "5px", marginTop: '5px' }}>Summary: {data.description}</p>
                {/* <p>Genre: {props.data.genre}</p> */}
                <p>Cast: {data.cast}</p>
                {/* <a href={data.watch_url} target="_blank">
                    <button style={buttonStyle}>Watch Now</button>
                </a> */}
                {/* <a href={data.watch_url} target="_blank">
                    <ButtonVandan  >Watch Now</ButtonVandan>
                </a> */}
                <a href={data.watch_url} target="_blank">
                    <ButtonVandan1 rating={data.rating} >Watch Now</ButtonVandan1>
                </a>

                {/* <p>discrict: {findDist()}</p> */}
                {/* <button>{age>18?'Submit':'Disabled'}</button> */}
                {/* <button>{buttonText}</button> */}
                {/* <button>{buttonFun()}</button> */}

            </div>
        </li>
    )
}