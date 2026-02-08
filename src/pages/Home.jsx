import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { createUseStyles } from 'react-jss';
import apiClient from '../services/apiClient';
import { ShoppingCart, ArrowRight } from 'lucide-react';
import Footer from '../components/Footer';

const useStyles = createUseStyles({
  container: {
    minHeight: '100vh',
    backgroundColor: '#f5f5f5',
    display: 'flex',
    flexDirection: 'column',
  },

  mainContent: {
    flex: 1,
  },
  
  // Hero Section
  hero: {
    backgroundColor: '#2a2a2a',
    color: 'white',
    padding: '5rem 2rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '4rem',
    minHeight: '600px',
    '@media (max-width: 768px)': {
      flexDirection: 'column',
      padding: '3rem 1rem',
      minHeight: 'auto',
    },
  },
  heroContent: {
    flex: 1,
    maxWidth: '500px',
  },
  heroLabel: {
    fontSize: '0.95rem',
    letterSpacing: '0.05em',
    color: '#aaa',
    marginBottom: '0.5rem',
    fontWeight: '400',
  },
  heroTitle: {
    fontSize: 'clamp(2.5rem, 6vw, 4rem)',
    fontWeight: '300',
    marginBottom: '1.5rem',
    lineHeight: '1.1',
    letterSpacing: '-0.02em',
  },
  heroTitleStrong: {
    fontWeight: '700',
  },
  heroSubtitle: {
    fontSize: '1rem',
    color: '#aaa',
    marginBottom: '2.5rem',
    lineHeight: '1.6',
    fontWeight: '300',
  },
  heroBtn: {
    padding: '0.75rem 2rem',
    backgroundColor: 'transparent',
    color: 'white',
    border: '1px solid white',
    borderRadius: '0.3rem',
    fontSize: '0.95rem',
    fontWeight: '500',
    textDecoration: 'none',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
    display: 'inline-block',
    '&:hover': {
      backgroundColor: 'rgba(255,255,255,0.05)',
      borderColor: '#fff',
    },
  },
  heroImage: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '@media (max-width: 768px)': {
      width: '100%',
    },
  },
  heroImageBox: {
    width: '100%',
    maxWidth: '350px',
    height: 'auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '& img': {
      width: '100%',
      height: 'auto',
      objectFit: 'contain',
    },
  },

  // Categories Section
  categoriesSection: {
    padding: '2rem',
    maxWidth: '1200px',
    margin: '0 auto',
    width: '100%',
  },
  sectionTitle: {
    fontSize: '1.25rem',
    fontWeight: '700',
    marginBottom: '1.5rem',
    color: '#111827',
  },
  categoriesTabs: {
    display: 'flex',
    gap: '1rem',
    marginBottom: '3rem',
    flexWrap: 'wrap',
  },
  categoryTab: {
    padding: '0.5rem 1.25rem',
    border: '1px solid #ddd',
    borderRadius: '0.3rem',
    backgroundColor: 'white',
    cursor: 'pointer',
    fontSize: '0.9rem',
    fontWeight: '500',
    color: '#333',
    transition: 'all 0.3s ease',
    '&:hover': {
      borderColor: '#4f46e5',
      backgroundColor: '#f9f9f9',
    },
  },
  categoryTabActive: {
    backgroundColor: '#111827',
    color: 'white',
    borderColor: '#111827',
  },

  // Products Section
  productsSection: {
    padding: '0 2rem 3rem',
    maxWidth: '1200px',
    margin: '0 auto',
    width: '100%',
  },
  sectionHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '2rem',
  },
  seeAllBtn: {
    color: '#666',
    textDecoration: 'none',
    fontWeight: '500',
    fontSize: '0.9rem',
    transition: 'all 0.3s ease',
    '&:hover': {
      color: '#111827',
    },
  },
  productsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
    gap: '1.5rem',
  },
  productCard: {
    backgroundColor: 'white',
    borderRadius: '0.3rem',
    overflow: 'hidden',
    transition: 'all 0.3s ease',
    boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
    '&:hover': {
      boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
    },
  },
  productImageWrapper: {
    width: '100%',
    height: '200px',
    backgroundColor: '#f5f5f5',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  productImage: {
    width: '100%',
    height: '100%',
    objectFit: 'contain',
    padding: '10px',
  },
  productInfo: {
    padding: '1rem',
  },
  productName: {
    fontSize: '0.9rem',
    fontWeight: '600',
    color: '#111827',
    marginBottom: '0.5rem',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },
  productPrice: {
    fontSize: '1rem',
    fontWeight: '700',
    color: '#111827',
  },
  productDescription: {
    fontSize: '0.85rem',
    color: '#666',
    marginTop: '0.3rem',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },

  // Loading & Empty
  loadingContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '200px',
    color: '#666',
  },
  emptyMessage: {
    textAlign: 'center',
    color: '#666',
    padding: '2rem',
  },
});

const Home = () => {
  const classes = useStyles();
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts();
    fetchCategories();
  }, []);

  useEffect(() => {
    filterProducts();
  }, [selectedCategory, products]);

  const fetchProducts = async () => {
    try {
      const response = await apiClient.get('/api/products');
      
      // Use dummy data if API returns empty
      const productsData = response.data && response.data.length > 0 
        ? response.data 
        : [
            {
              _id: '1',
              product_name: 'Street Flow Tee',
              price: 60000,
              product_image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&q=80',
              category: 'Fashion',
              description: 'Oversized clean drip',
              stock: 50
            },
            {
              _id: '2',
              product_name: 'FlexMode Hoodie',
              price: 150000,
              product_image: 'https://images.unsplash.com/photo-1556821552-5ffb79f72db9?w=400&q=80',
              category: 'Fashion',
              description: 'Built for daily flex',
              stock: 30
            },
            {
              _id: '3',
              product_name: 'Street Flow Tee',
              price: 60000,
              product_image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&q=80',
              category: 'Fashion',
              description: 'Oversized clean drip',
              stock: 45
            },
            {
              _id: '4',
              product_name: 'FlexMode Hoodie',
              price: 150000,
              product_image: 'https://images.unsplash.com/photo-1556821552-5ffb79f72db9?w=400&q=80',
              category: 'Fashion',
              description: 'Built for daily flex',
              stock: 25
            },
          ];
      
      setProducts(productsData);
      setFilteredProducts(productsData);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching products:', error);
      
      // Use dummy data on error
      const dummyProducts = [
        {
          _id: '1',
          product_name: 'Street Flow Tee',
          price: 60000,
          product_image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&q=80',
          category: 'Fashion',
          description: 'Oversized clean drip',
          stock: 50
        },
        {
          _id: '2',
          product_name: 'FlexMode Hoodie',
          price: 150000,
          product_image: 'https://images.unsplash.com/photo-1556821552-5ffb79f72db9?w=400&q=80',
          category: 'Fashion',
          description: 'Built for daily flex',
          stock: 30
        },
        {
          _id: '3',
          product_name: 'Street Flow Tee',
          price: 60000,
          product_image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&q=80',
          category: 'Fashion',
          description: 'Oversized clean drip',
          stock: 45
        },
        {
          _id: '4',
          product_name: 'FlexMode Hoodie',
          price: 150000,
          product_image: 'https://images.unsplash.com/photo-1556821552-5ffb79f72db9?w=400&q=80',
          category: 'Fashion',
          description: 'Built for daily flex',
          stock: 25
        },
      ];
      
      setProducts(dummyProducts);
      setFilteredProducts(dummyProducts);
      setLoading(false);
    }
  };

  const fetchCategories = async () => {
    try {
      const response = await apiClient.get('/api/categories');
      
      // Use dummy categories if API returns empty
      const categoriesData = response.data && response.data.length > 0 
        ? response.data 
        : [
            { _id: 'fashion', category_name: 'Fashion' },
            { _id: 'books', category_name: 'Books' },
            { _id: 'electronics', category_name: 'Electronics' },
          ];
      
      setCategories(categoriesData);
    } catch (error) {
      console.error('Error fetching categories:', error);
      
      // Use dummy categories on error
      const dummyCategories = [
        { _id: 'fashion', category_name: 'Fashion' },
        { _id: 'books', category_name: 'Books' },
        { _id: 'electronics', category_name: 'Electronics' },
      ];
      
      setCategories(dummyCategories);
    }
  };

  const filterProducts = () => {
    if (!products || products.length === 0) {
      setFilteredProducts([]);
      return;
    }
    
    if (selectedCategory === 'All') {
      setFilteredProducts(products.slice(0, 4));
    } else {
      const filtered = products.filter(
        (product) => product.category === selectedCategory
      );
      setFilteredProducts(filtered.slice(0, 4));
    }
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className={classes.container}>
      <div className={classes.mainContent}>
        {/* Hero Section */}
        <div className={classes.hero}>
          <div className={classes.heroContent}>
            <p className={classes.heroLabel}>Pro.Beyond.</p>
            <h1 className={classes.heroTitle}>
              iPhone 14 <span className={classes.heroTitleStrong}>Pro</span>
            </h1>
            <p className={classes.heroSubtitle}>
              Created to change everything for the better. For everyone
            </p>
            <Link to="/list-products" className={classes.heroBtn}>
              Shop Now
            </Link>
          </div>
          <div className={classes.heroImage}>
            <div className={classes.heroImageBox}>
              <img 
                src="https://images.unsplash.com/photo-1592286927505-1def25115558?w=500&q=80" 
                alt="iPhone 14 Pro"
              />
            </div>
          </div>
        </div>

        {/* Categories Section */}
        <div className={classes.categoriesSection}>
          <h2 className={classes.sectionTitle}>Categories</h2>
          <div className={classes.categoriesTabs}>
            <button
              className={`${classes.categoryTab} ${
                selectedCategory === 'All' ? classes.categoryTabActive : ''
              }`}
              onClick={() => setSelectedCategory('All')}
            >
              All
            </button>
            {categories.map((cat) => (
              <button
                key={cat._id}
                className={`${classes.categoryTab} ${
                  selectedCategory === cat._id ? classes.categoryTabActive : ''
                }`}
                onClick={() => setSelectedCategory(cat._id)}
              >
                {cat.category_name}
              </button>
            ))}
          </div>
        </div>

        {/* Products Section */}
        <div className={classes.productsSection}>
          <div className={classes.sectionHeader}>
            <h2 className={classes.sectionTitle}>Popular</h2>
            <Link to="/list-products" className={classes.seeAllBtn}>
              See all
            </Link>
          </div>
          
          {loading ? (
            <div className={classes.loadingContainer}>
              <p>Loading products...</p>
            </div>
          ) : filteredProducts.length > 0 ? (
            <div className={classes.productsGrid}>
              {filteredProducts.map((product) => (
                <Link
                  key={product._id}
                  to={`/product-detail/${product._id}`}
                  style={{ textDecoration: 'none' }}
                >
                  <div className={classes.productCard}>
                    <div className={classes.productImageWrapper}>
                      {product.product_image ? (
                        <img 
                          src={product.product_image} 
                          alt={product.product_name}
                          className={classes.productImage}
                        />
                      ) : (
                        <div style={{ color: '#9ca3af' }}>No Image</div>
                      )}
                    </div>
                    <div className={classes.productInfo}>
                      <h3 className={classes.productName}>{product.product_name}</h3>
                      <p className={classes.productDescription}>{product.description}</p>
                      <p className={classes.productPrice}>{formatPrice(product.price)}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className={classes.emptyMessage}>
              <p>No products available</p>
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
