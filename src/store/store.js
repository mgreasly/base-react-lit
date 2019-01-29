import createStore from "redux-zero";
import axios from 'axios';
import config from '../config';

const store = createStore({
    items: [],
    loadingItems: false
});

const mapToProps = ({ items, loadingItems }) => ({ items, loadingItems });

const GetItems = (setState) => {
    setState({ loadingItems: true });
    return axios.get(config.itemsUrl)
    .then(response => { return { items: response.data, loadingItems: false }; })
    .catch(error => { return { items: [], loadingItems: false }; });
}

const actions = ({ setState }) => ({
    initStore() { return GetItems(setState); },
    getItems() { return GetItems(setState); },
});

export { store, mapToProps, actions };