import React, { useState, useMemo } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { createUseStyles } from 'react-jss';
import useProducts from '../hooks/Products/useProducts';
import toast from 'react-hot-toast';
import apiClient from '../services/apiClient';
import QuantityModal from '../components/QuantityModal';
import ReceiptModal from '../components/ReceiptModal';
import Footer from '../components/Footer';
import { Heart, Share2, Star } from 'lucide-react';

const useStyles = createUseStyles({
  page: {
    backgroundColor: '#ffffff',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
  },
  mainContent: {
    flex: 1,
    padding: '2rem',
    maxWidth: '1200px',
    margin: '0 auto',
    width: '100%',
  },
  container: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '3rem',
    '@media (max-width: 768px)': {
      gridTemplateColumns: '1fr',
      gap: '2rem',
    },
  },
  visualSide: {
    backgroundColor: '#f5f5f5',
    borderRadius: '0.5rem',
    padding: '2rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
  },
  imageWrapper: {
    width: '100%',
    height: '400px',
    backgroundColor: '#f5f5f5',
    borderRadius: '0.5rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  image: {
    maxWidth: '100%',
    maxHeight: '100%',
    objectFit: 'contain',
  },
  wishlistBtn: {
    position: 'absolute',
    top: '1rem',
    right: '1rem',
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    backgroundColor: 'white',
    border: 'none',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.3s ease',
    '&:hover': {
      backgroundColor: '#f0f0f0',
    },
  },
  colorSwatches: {
    display: 'flex',
    gap: '1rem',
  },
  colorSwatch: {
    width: '50px',
    height: '50px',
    borderRadius: '0.25rem',
    backgroundColor: '#e5e5e5',
    border: '1px solid #ddd',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    '&:hover': {
      borderColor: '#333',
    },
  },
  contentSide: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
  },
  title: {
    fontSize: '2rem',
    fontWeight: '700',
    color: '#111827',
    marginBottom: '0.5rem',
  },
  description: {
    fontSize: '1rem',
    color: '#666',
    marginBottom: '1rem',
  },
  ratingRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
  },
  stars: {
    display: 'flex',
    gap: '0.25rem',
    alignItems: 'center',
  },
  star: {
    color: '#ffc107',
    fontSize: '1rem',
  },
  reviewCount: {
    fontSize: '0.9rem',
    color: '#666',
  },
  separator: {
    height: '1px',
    backgroundColor: '#ddd',
    width: '100%',
  },
  priceSection: {
    paddingBottom: '1.5rem',
  },
  price: {
    fontSize: '1.75rem',
    fontWeight: '700',
    color: '#111827',
    marginBottom: '1rem',
  },
  descriptionSection: {
    paddingBottom: '1.5rem',
  },
  descTitle: {
    fontSize: '1rem',
    fontWeight: '700',
    color: '#111827',
    marginBottom: '0.75rem',
  },
  descText: {
    fontSize: '0.95rem',
    color: '#666',
    lineHeight: '1.6',
    marginBottom: '0.5rem',
  },
  readMore: {
    color: '#4f46e5',
    cursor: 'pointer',
    textDecoration: 'none',
    fontWeight: '600',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
  buttonsRow: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '1rem',
    paddingTop: '1.5rem',
  },
  btnSecondary: {
    padding: '0.875rem 1.5rem',
    border: '1px solid #111827',
    backgroundColor: 'transparent',
    color: '#111827',
    borderRadius: '0.3rem',
    fontSize: '1rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    '&:hover': {
      backgroundColor: '#f5f5f5',
    },
  },
  btnPrimary: {
    padding: '0.875rem 1.5rem',
    backgroundColor: '#111827',
    color: 'white',
    border: 'none',
    borderRadius: '0.3rem',
    fontSize: '1rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    '&:hover': {
      backgroundColor: '#000',
    },
    '&:disabled': {
      backgroundColor: '#ccc',
      cursor: 'not-allowed',
    },
  },
});

const ProductDetail = () => {
  const { id } = useParams();
  const classes = useStyles();
  const navigate = useNavigate();
  const { productDetail, loading, refetch } = useProducts(id);

  const [quantityModalOpen, setQuantityModalOpen] = useState(false);
  const [receiptData, setReceiptData] = useState(null);
  const [showReceipt, setShowReceipt] = useState(false);
  const [wishlist, setWishlist] = useState(false);
  const [expandDescription, setExpandDescription] = useState(false);

  const handleAddToCart = async () => {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    if (!user?.token) {
      toast.error('Silakan login terlebih dahulu');
      navigate('/login');
      return;
    }

    try {
      const toastId = toast.loading('Menambahkan ke keranjang...');
      await apiClient.post('/api/cart/add', {
        product_id: productDetail._id,
        quantity: 1,
      });
      toast.success('Berhasil ditambahkan ke keranjang!', { id: toastId });
    } catch (error) {
      toast.error('Gagal menambahkan ke keranjang', {
        id: toastId,
      });
    }
  };

  const handleAskSeller = () => {
    toast.info('Fitur chat dengan penjual akan segera tersedia');
  };

  if (loading || !productDetail) {
    return <div style={{ padding: '2rem', textAlign: 'center' }}>Loading...</div>;
  }

  const descriptionPreview = productDetail.description?.substring(0, 150) + '...';
  const fullDescription = productDetail.description || '';

  return (
    <div className={classes.page}>
      <div className={classes.mainContent}>
        <div className={classes.container}>
          {/* Image Side */}
          <div className={classes.visualSide}>
            <div className={classes.imageWrapper}>
              <button 
                className={classes.wishlistBtn}
                onClick={() => setWishlist(!wishlist)}
              >
                <Heart size={20} fill={wishlist ? 'currentColor' : 'none'} />
              </button>
              {productDetail.product_image ? (
                <img
                  src={productDetail.product_image}
                  alt={productDetail.product_name}
                  className={classes.image}
                />
              ) : (
                <div style={{ color: '#ccc', fontSize: '2rem' }}>No Image</div>
              )}
            </div>
            <div className={classes.colorSwatches}>
              <div className={classes.colorSwatch} style={{ backgroundColor: '#e5e5e5' }} />
              <div className={classes.colorSwatch} style={{ backgroundColor: '#d0d0d0' }} />
              <div className={classes.colorSwatch} style={{ backgroundColor: '#c0c0c0' }} />
              <div className={classes.colorSwatch} style={{ backgroundColor: '#f0f0f0' }} />
            </div>
          </div>

          {/* Content Side */}
          <div className={classes.contentSide}>
            <h1 className={classes.title}>{productDetail.product_name}</h1>
            <p className={classes.description}>
              {productDetail.description?.split('\n')[0] || 'Premium quality product'}
            </p>

            {/* Rating */}
            <div className={classes.ratingRow}>
              <div className={classes.stars}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className={classes.star} fill="#ffc107" />
                ))}
              </div>
              <span className={classes.reviewCount}>(1.3K Reviews)</span>
            </div>

            <div className={classes.separator} />

            {/* Price */}
            <div className={classes.priceSection}>
              <div className={classes.price}>
                Rp {productDetail.price?.toLocaleString('id-ID') || '0'}
              </div>
            </div>

            {/* Description */}
            <div className={classes.descriptionSection}>
              <h3 className={classes.descTitle}>Description</h3>
              <p className={classes.descText}>
                {expandDescription ? fullDescription : descriptionPreview}
              </p>
              {!expandDescription && (
                <span
                  className={classes.readMore}
                  onClick={() => setExpandDescription(true)}
                >
                  Read all
                </span>
              )}
            </div>

            {/* Buttons */}
            <div className={classes.buttonsRow}>
              <button className={classes.btnSecondary} onClick={handleAskSeller}>
                Ask Seller
              </button>
              <button
                className={classes.btnPrimary}
                onClick={handleAddToCart}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ProductDetail;
