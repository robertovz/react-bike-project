import React, { Component } from "react";
import { storeProducts, detailProduct } from './data';

const ProductContext = React.createContext();

class ProductProvider extends Component {
    state = {
        products: [],
        sortedProducts: [],
        featuredProducts: [],
        newProducts: [],
        relatedProducts: [],
        productList: [],
        items: [],
        detailProduct: detailProduct,
        cart: [],
        compare: [],
        title: "",
        speed: "",
        modalOpen: false,
        modalFilterOpen: false,
        modalListOpen: false,
        modalProduct: detailProduct,
        grid: true,
        cartSubTotal: 0,
        cartTax: 0,
        cartTotal: 0,
        brand: "All",
        type: "",
        wheel: "",
        category: "",
        material: "",
        price: 0,
        minPrice: 0,
        maxPrice: 0,
        order: "default",
        currentPage: 1,
        pageSize: 9,
        search: "",
        stars: 0,
        author: "",
        comment: "",
        limit: 5
    }
    componentDidMount() {
        this.setProducts();
    }
    setProducts = () => {
        let tempProducts = [];
        let sortedProducts = [];
        let featuredProducts = [];
        let newProducts = [];
        let productList = [];
        let items = [];
        let compare = [];
        let maxPrice = 0;
        let { pageSize } = this.state;
        storeProducts.forEach(item => {

            item.oldPrice = parseFloat(item.price).toFixed(2);
            item.price =  (item.price - (parseFloat(item.price*item.offer)/100)).toFixed(2);
            item.price = parseFloat(item.price);

            item.rating = 0;
            for (let i = 0; i < item.review.length; i++) {
                item.rating += item.review[i].rating;
            }
            item.rating /= item.review.length;
            item.rating = parseFloat(item.rating).toFixed(2);

            if (item.price > maxPrice) {
                maxPrice = item.price + 1;
            }
            const singleItem = { ...item };

            tempProducts = [...tempProducts, singleItem];
            sortedProducts = [...sortedProducts, singleItem];
        })
        items = [...tempProducts];
        let price = maxPrice;
        productList = tempProducts.slice((1*pageSize - pageSize), 1*pageSize);

        featuredProducts = tempProducts.filter(item => item.featured === true)
        newProducts = tempProducts.filter(item => item.newest === true)

        this.setState(() => {
            return {
                price, maxPrice, loading: false, sortedProducts, productList, compare, newProducts,
                featuredProducts, products: tempProducts, items
            }
        })
    }
    getItem = (id) => {
        const product = this.state.products.find(item => item.id === id);
        return product;
    }
    handleChange = event => {
        const target = event.target;
        const value = target.type === "checkbox" ? target.checked : target.value;
        const name = target.name;
        const itemId = target.id;
        this.setState({
            [name]: value, name, itemId
        }, this.filterProducts)
    }
    handleChangeSort = event => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value
        }, this.sortProducts)
    }
    showProduct = (event) => {
        let { products } = this.state;
        const name = event.target.name;
        const itemId = event.target.id;
        let title = '';
        let category = '';
        let tempProducts = [...products];
        
        if(itemId === "offer"){
            tempProducts = tempProducts.filter(product => product.offer === parseInt(name));
        }
        if (itemId === "type") {
            title = name;
            category = "";
            tempProducts = tempProducts.filter(product => product.type === name);
        }
        if (itemId === "category") {
            category = name;
            tempProducts = tempProducts.filter(product => product.category === name);
        }
        this.setState({
            items: tempProducts, sortedProducts: tempProducts, productList: tempProducts, title, category,
            material: '', speed: '', wheel: ''
        }, this.setCurrentPage)
    }
    filterItem = (event) => {
        let {
            title
        } = this.state
        const name = event.target.name;
        const itemId = event.target.id;
        if (itemId === "type") {
            title = name;
        }
        this.setState({
            [itemId]: name, title
        }, this.showItemsFiltered)
    }
    showItemsFiltered = () => {
        let {
            products, material, speed, wheel, title, category
        } = this.state;
        let tempProducts = [...products];
        if(material !== "") {
            tempProducts = tempProducts.filter(product => product.material === material);
        }
        if(speed !== "") {
            tempProducts = tempProducts.filter(product => product.speed === parseInt(speed));
        }
        if(wheel !== "") {
            tempProducts = tempProducts.filter(product => product.wheel === parseInt(wheel));
        }
        if(title !== "") {
            tempProducts = tempProducts.filter(product => product.type === title);
        }
        if(category !== "") {
            tempProducts = tempProducts.filter(product => product.category === category);
            title = category;
        }
        this.setState({
            items: tempProducts, productList: tempProducts, sortedProducts: tempProducts
        }, this.setCurrentPage)
    }
    filterProducts = () => {
        let {
            items, brand, price, minPrice, maxPrice, material
        } = this.state
        let tempProducts = [...items];
        let currentPage = 1;
        if (brand !== "All") {
            tempProducts = tempProducts.filter(product => product.company === brand);
        }
        tempProducts = tempProducts.filter(product => product.price <= price);
        tempProducts = tempProducts.filter(
            product => product.price >= minPrice && product.price <= maxPrice
        )
        this.setState({
            sortedProducts: tempProducts, productList: tempProducts, currentPage, material
        }, this.setCurrentPage);
    }
    sortProducts = () => {
        let { items, order } = this.state;
        let tempProducts = [...items];
        if (order === 'lowests') {
            tempProducts = tempProducts.sort((a, b) => (parseFloat(a.price) - parseFloat(b.price)))
        } else if (order === 'highests') {
            tempProducts = tempProducts.sort((a, b) => (parseFloat(b.price) - parseFloat(a.price)))
        }
        this.setState({
            sortedProducts: tempProducts, productList: tempProducts
        }, this.setCurrentPage);
    }
    getRating = (event) => {
        const { stars } = this.state;
        console.log(stars);
        this.setState(() => {
            return { stars }
        })
    }
    getComment = (event) => {
        const value = event.target.value;
        const name = event.target.name;

        this.setState(() => {
            return { [name]: value };
        })
    }
    addComment = (id) => {
        let { author, comment, products } = this.state;
        
        let tempProducts = [...products];
        const index = tempProducts.indexOf(this.getItem(id));
        const product = tempProducts[index];

        product.review[product.review.length + 1] = {
            author: author,
            description: comment
        };

        this.setState(() => {
            return { products: [...this.state.products] }
        })
    }
    createControls = () => {
        let controls = [];
        let tempProducts = [...this.state.sortedProducts];
        let { currentPage, pageSize } = this.state;
        let pageCount = parseInt(tempProducts.length / pageSize);
        if (currentPage === undefined) {
            currentPage = 1;
        }
        if (tempProducts.length % pageSize > 0) {
            pageCount++;
        }
        const baseClassName = "pagination-controls__button";
        for (let i = 0; i <= pageCount; i++) {
            const activeClassName = i === currentPage ? `${baseClassName}--active` : '';
            controls.push(
                <div className={`${baseClassName} ${activeClassName}`} onClick={() => this.setCurrentPage(i)}>
                    {i}
                </div>
            )
        }
        currentPage > 1 ? controls[0] =
            <div className={`${baseClassName}`} onClick={() => this.setCurrentPage(currentPage - 1)}>
                {'<'}
            </div> : controls[0] = <div className={`${baseClassName} d-none`}></div>


        currentPage < pageCount ? controls[pageCount + 1] =
            <div className={`${baseClassName}`} onClick={() => this.setCurrentPage(currentPage + 1)}>
                {'>'}
            </div> : controls[pageCount + 1] = <div className={`${baseClassName} d-none`}></div>
            
        return controls;
    }
    setPageSize = (num) => {
        let pageSize = num.target.value;
        this.setState(() => {
            return { pageSize }
        }, this.setCurrentPage)
    }
    setCurrentPage = (num) => {
        let currentPage = num;
        if (num === undefined) {
            num = 1;
        } 
        let tempProducts = [...this.state.sortedProducts];
        let { pageSize } = this.state;
        num *= pageSize;
        tempProducts = tempProducts.slice((num - pageSize), num);
        this.setState(() => {
            return { productList: tempProducts, currentPage }
        })
    }
    setSearchProducts = (e) => {
        let search = e.target.value;
        let typeSearch = e.target.name;
        this.setState(() => {
            return { search, typeSearch }
        }, this.searchProducts)
    }
    searchProducts = () => {
        let { items, search, typeSearch, title, category, material, speed, wheel } = this.state;
        let tempProducts = [...this.state.items];
        if(typeSearch !== "filter") {
            tempProducts = [...this.state.products];
            title = '';
            category = '';
            material = '';
            speed = '';
            wheel = '';
            items = tempProducts;
        }
        search = search.trim().toLowerCase();
        if(search.length > 0) {
            tempProducts = tempProducts.filter(product => product.title.toLowerCase().match(search));
        }
        this.setState(() => {
            return { items, productList: tempProducts, sortedProducts: tempProducts, title, category, material, speed, wheel }
        }, this.setCurrentPage)
    }
    handleDetail = (id) => {
        let {
            products
        } = this.state
        const product = this.getItem(id);
        let relatedProducts = [...products];
        relatedProducts = relatedProducts.filter(item => item.type === product.type && item !== product)
        this.setState(() => {
            return { relatedProducts, detailProduct: product }
        })
    }
    changeView = () => {
        this.setState(() => {
            return { grid: !this.state.grid }
        })
    }
    addToCompare = (id) => {
        let tempProducts = [...this.state.products];
        const index = tempProducts.indexOf(this.getItem(id));
        const product = tempProducts[index];
        product.inCompare = true;
        product.count = 1;
        this.setState(() => {
            return {
                compare: [...this.state.compare, product]
            };
        })
    }
    addToCart = (id) => {
        let tempProducts = [...this.state.products];
        const index = tempProducts.indexOf(this.getItem(id));
        const product = tempProducts[index];
        product.inCart = true;
        product.count = 1;
        const price = product.price;
        product.total = price;
        this.setState(() => {
            return { products: tempProducts, cart: [...this.state.cart, product] };
        },
            () => {
                this.addTotals();
            })
    };
    openListModal = () => {
        this.setState(() => {
            return { modalListOpen: true }
        })
    }
    closeListModal = () => {
        this.setState(() => {
            return { modalListOpen: false }
        })
    }
    openFilterModal = (compare) => {
        this.setState(() => {
            return { compare, modalFilterOpen: true }
        })
    }
    closeFilterModal = () => {
        this.setState(() => {
            return { modalFilterOpen: false }
        })
    }
    openModal = id => {
        const product = this.getItem(id);
        this.setState(() => {
            return { modalProduct: product, modalOpen: true }
        })
    }
    closeModal = () => {
        this.setState(() => {
            return { modalOpen: false, modalFilterOpen: false }
        })
    }
    onLoadMore = () => {
        this.setState({
            limit: this.state.limit+5
        })
    }
    increment = (id) => {
        let tempCart = [...this.state.cart];
        const selectedProduct = tempCart.find(item => item.id === id);

        const index = tempCart.indexOf(selectedProduct);
        const product = tempCart[index];

        product.count = product.count + 1;
        product.total = product.count * product.price;

        this.setState(() => { return { cart: [...tempCart] } }, () => { this.addTotals() })
    }
    decrement = (id) => {
        let tempCart = [...this.state.cart];
        const selectedProduct = tempCart.find(item => item.id === id);

        const index = tempCart.indexOf(selectedProduct);
        const product = tempCart[index];
        product.count = product.count - 1;

        if (product.count === 0) {
            this.removeItem(id);
        } else {
            product.total = product.count * product.price;
            this.setState(() => { return { cart: [...tempCart] } }, () => { this.addTotals() })
        }
    }
    removeCompare = id => {
        let tempProducts = [...this.state.products];
        let tempCompare = [...this.state.compare];
        tempCompare = tempCompare.filter(item => item.id !== id);

        const index = tempProducts.indexOf(this.getItem(id));
        const product = tempProducts[index];
        product.inCompare = false;

        this.setState(() => {
            return {
                compare: [...tempCompare], product
            };
        })
    }
    removeItem = id => {
        let tempProducts = [...this.state.products];
        let tempCart = [...this.state.cart];

        tempCart = tempCart.filter(item => item.id !== id);

        const index = tempProducts.indexOf(this.getItem(id));
        let removedProduct = tempProducts[index];
        removedProduct.inCart = false;
        removedProduct.count = 0;
        removedProduct.total = 0;

        this.setState(() => {
            return {
                cart: [...tempCart],
                products: [...tempProducts]
            };
        }, () => {
            this.addTotals();
        })
    }
    clearCart = () => {
        this.setState(() => {
            return { cart: [] };
        }, () => {
            this.setProducts();
            this.addTotals();
        })
    }
    addTotals = () => {
        let tempSubTotal = 0;
        this.state.cart.map(item => (tempSubTotal += item.total));
        const tempTax = tempSubTotal * 0.1;
        let tax = parseFloat(tempTax.toFixed(2));
        const total = parseFloat(tempSubTotal + tax).toFixed(2);
        const subTotal = parseFloat(tempSubTotal).toFixed(2);
        tax = parseFloat(tax).toFixed(2);
        this.setState(() => {
            return {
                cartSubTotal: subTotal,
                cartTax: tax,
                cartTotal: total
            }
        })
    }
    render() {
        return (
            <ProductContext.Provider
                value={{
                    ...this.state,
                    handleDetail: this.handleDetail,
                    handleChange: this.handleChange,
                    handleChangeSort: this.handleChangeSort,
                    handleScroll: this.handleScroll,
                    filterItem: this.filterItem,
                    showProduct: this.showProduct,
                    changeView: this.changeView,
                    getRating: this.getRating,
                    getComment: this.getComment,
                    addComment: this.addComment,
                    addToCompare: this.addToCompare,
                    addToCart: this.addToCart,
                    openModal: this.openModal,
                    openFilterModal: this.openFilterModal,
                    openListModal: this.openListModal,
                    closeModal: this.closeModal,
                    createControls: this.createControls,
                    setPageSize: this.setPageSize,
                    searchProducts: this.searchProducts,
                    setSearchProducts: this.setSearchProducts,
                    closeFilterModal: this.closeFilterModal,
                    closeListModal: this.closeListModal,
                    onLoadMore: this.onLoadMore,
                    increment: this.increment,
                    decrement: this.decrement,
                    removeFilterItem: this.removeFilterItem,
                    removeCompare: this.removeCompare,
                    removeItem: this.removeItem,
                    clearCart: this.clearCart,
                }}>
                {this.props.children}
            </ProductContext.Provider>
        );
    }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };

export function withProductConsumer(Component) {
    return function ProductWrapper(props) {
        return (<ProductConsumer>
            {value => <Component {...props} context={value} />}
        </ProductConsumer>)
    }
}