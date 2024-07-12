import React , {useState,useEffect} from 'react';

function Category({onSelect}) {
    const [categories, setCategories]= useState([]);
    const [selectedCategory, setSelectedCategory]= useState('');

    useEffect(() => {
        fetch('/categories')
        .then(response => response.json())
        .then(data => setCategories(data.categoryNames))
        .catch(error => console.error('Error fetching actegories',error));
        
    },[])
}
