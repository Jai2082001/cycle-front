import classes from './SmallProductDisplay.module.css'
import { Card, Icon } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'
import { Image, Reveal } from 'semantic-ui-react'
import { ButtonGroup, Button } from 'react-bootstrap'

const SmallProductDisplay = (props) => {

    let mainString;
    if (props.categories === 'Cycle') {
        mainString = `${props.brand.label}/${props.weight}/${props['frame material']}`
    } else {
        mainString = `${props.brand.label}`
    }
    let priceString;
    if (props.overprice) {
        priceString = `${props.overprice}`;

        priceString = priceString + ` ${props.price}`
    } else {
        priceString = `${props.price}`
    }
    if (props.coupon) {
        const CardIcon = (
            <p>
                <i class="fas fa-tags"></i> {props.coupon.length} offers
            </p>
        )
        return (
            <div className={classes.productContainer}>
                <div className={classes.pDisplay}>
                    <NavLink className={classes.cardDisplayer}
                        to={`/singleDisplay/${props.name}`}>
                        <div className={classes.parentContainer}>
                            <div className={classes.containerDiv}>

                                <div className={!props.stock || props.stock === 'Out of Stock' ? classes.revealDiv : classes.revealDivNo}>
                                    {(!props.stock || props.stock === 'Out of Stock') &&
                                        <div className={classes.overlayDiv}>
                                            <div className={classes.outOfStock}>Out Of Stock</div>
                                        </div>}
                                    <Reveal animated='move up'>
                                        <Reveal.Content visible>
                                            <Image src={props.displayimages} />
                                        </Reveal.Content>
                                        <Reveal.Content hidden>
                                            <button className={classes.btnIcon}><i class="fas fa-eye"></i></button>
                                            <Image src={props.images[0]} />
                                        </Reveal.Content>

                                    </Reveal>
                                </div>
                                <div className={classes.nameAndPrice}>
                                    <p>{props.name}</p>
                                    <article><i class="fas fa-rupee-sign"></i>{props.price}</article>
                                    <ButtonGroup className={classes.btnGroupCart}>
                                        <Button className={classes.iconBtn}><i class="fas fa-shopping-bag"></i></Button>
                                        <Button className={classes.cartBtn}>View Product</Button>
                                    </ButtonGroup>
                                </div>
                            </div>
                        </div>
                    </NavLink>
                </div>
            </div>
        )
    } else {
        return (
            <div className={classes.productContainer}>
                <div className={classes.pDisplay}>
                    <NavLink className={classes.cardDisplayer}
                        to={`/singleDisplay/${props.name}`}>
                        <div className={classes.parentContainer}>
                            <div className={classes.containerDiv}>
                                <Reveal animated='move up'>
                                    <Reveal.Content visible>
                                        <Image className={classes.img} src={props.displayimages} />
                                    </Reveal.Content>
                                    <Reveal.Content hidden className={classes.buttonDiv}>
                                        <button className={classes.btnIcon}><i class="fas fa-eye"></i></button>
                                        <Image className={classes.img} src={props.images[0]} />
                                    </Reveal.Content>
                                </Reveal>
                                <div className={classes.nameAndPrice}>
                                    <p>{props.name}</p>
                                    <article><i class="fas fa-rupee-sign"></i>{props.price}</article>
                                    <ButtonGroup className={classes.btnGroupCart}>
                                        <Button className={classes.iconBtn}><i class="fas fa-shopping-bag"></i></Button>
                                        <Button className={classes.cartBtn}>View Product</Button>
                                    </ButtonGroup>
                                </div>
                            </div>
                        </div>
                    </NavLink>
                </div>
            </div>
        )

    }

}

export default SmallProductDisplay
