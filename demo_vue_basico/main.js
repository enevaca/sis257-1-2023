const { createApp, ref, reactive, computed } = Vue;

const app = createApp({
  setup() {
    const cart = ref(0);
    const product = ref('Camiseta');
    const brand = ref('Vue');
    const image = ref('./assets/images/t-shirt-green-bolivia.jpg');
    const inStock = ref(true);
    const details = reactive(['50% algodón', '30% lana', '20% poliéster']);
    const variants = reactive([
      { id: 568, color: 'green', image: './assets/images/t-shirt-green-bolivia.jpg' },
      { id: 569, color: 'white', image: './assets/images/t-shirt-white-bolivia.jpg' }
    ]);

    function addToCart() {
      cart.value++;
    }

    function updateImage(variantImage) {
      image.value = variantImage;
    }

    const title = computed(() => brand.value+' '+product.value);
    
    return { 
      cart, 
      product, 
      image, 
      inStock, 
      details, 
      variants,
      addToCart,
      updateImage,
      title
    };
  }
});
