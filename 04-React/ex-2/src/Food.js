import PropTypes from 'prop-types';

const Food = (props)=>{
    console.log('Food props >> ', props);
    console.log(props.food);
    
    const food = props.food
    const colorstyle = {color: 'red'};

    return(
        <>
            <div>내가 좋아하는 음식은 <span style={colorstyle}>{food}</span></div>
        </>
    )
}

Food.defaultProps = {
    food: '파스타',
}

Food.propTypes = {
    food: PropTypes.string,
}

export default Food;