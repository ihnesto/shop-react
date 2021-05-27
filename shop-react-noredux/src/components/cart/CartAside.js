import HaveCoupon from './HaveCoupon';
import TotalPrice from './TotalPrice';

function CardAside(props) {
    return (
        <aside className="col-md-3">
            <HaveCoupon />
            <TotalPrice totalSum= {props.totalSum }/>
        </aside>
    );
}

export default CardAside;
