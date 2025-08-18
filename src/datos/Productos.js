import dell5420 from '../imagenes/Dell 5420.webp';
import TecladoDell from '../imagenes/TecladoDell.webp';
import MonitorDell from '../imagenes/MonitorDell.jpeg';
import RatonDell from '../imagenes/RatonDell.webp';
import ImpresoraHP from '../imagenes/ImpresoraHP.webp';
import SSDSanDisk from '../imagenes/SSDSanDisk.webp';
import WebcamLogitech from '../imagenes/WebCam.webp';
import AudifonosSony from '../imagenes/AudifonosSony.webp';
import Dell7090 from '../imagenes/Dell7090.webp';
import APUnifi from '../imagenes/APUnifi.webp';



const productos = [
  {
    id: 'prod001',
    nombre: 'Laptop Dell 5410',
    categoria: 'Computo',
    fabricante: 'Dell',
    descripcion: 'Portátil de alto rendimiento.',
    precio: 18000.00,
    stock: 15,
    urlImagen: dell5420
  },
  {
    id: 'prod002',
    nombre: 'Teclado Dell KM5221W',
    categoria: 'Periféricos',
    fabricante: 'Dell',
    descripcion: 'Teclado compacto.',
    precio: 190.00,
    stock: 50,
    urlImagen: TecladoDell
  },
  {
    id: 'prod003',
    nombre: 'Monitor Dell',
    categoria: 'Monitores',
    fabricante: 'Dell',
    descripcion: 'Monitor resolución QHD y 240Hz de tasa de refresco, para una inmersión total.',
    precio: 1700.00,
    stock: 8,
    urlImagen: MonitorDell
  },
  {
    id: 'prod004',
    nombre: 'Ratón Dell Wireless Mouse',
    categoria: 'Periféricos',
    fabricante: 'Dell',
    descripcion: 'Ratón inalámbrico ergonómico con conexión Bluetooth.',
    precio: 500.00,
    stock: 30,
    urlImagen: RatonDell
  },
  {
    id: 'prod005',
    nombre: 'SSD SanDisk 1TB',
    categoria: 'Almacenamiento',
    fabricante: 'SanDisk',
    descripcion: 'Disco sólido de 1TB, ideal para mejorar el rendimiento de tu PC.',
    precio: 800.00,
    stock: 25,
    urlImagen: SSDSanDisk
  },
  {
    id: 'prod006',
    nombre: 'Webcam Logitech C920S',
    categoria: 'Periféricos',
    fabricante: 'Logitech',
    descripcion: 'Webcam Full HD con enfoque automático y corrección de luz, ideal para videollamadas.',
    precio: 770.00,
    stock: 20,
    urlImagen: WebcamLogitech
  },
  {
    id: 'prod007',
    nombre: 'Impresora HP LaserJet Pro M404n',
    categoria: 'Impresoras',
    fabricante: 'HP',
    descripcion: 'Impresora láser monocromática de alta velocidad para oficinas pequeñas o uso personal.',
    precio: 3250.00,
    stock: 10,
    urlImagen: ImpresoraHP
  },
  {
    id: 'prod008',
    nombre: 'Access Point Ubiquiti UniFi 6',
    categoria: 'Redes',
    fabricante: 'Ubiquiti',
    descripcion: 'Punto de acceso Wi-Fi 6 con tecnología MU-MIMO y OFDMA para una conectividad rápida y eficiente.',
    precio: 1120.00,
    stock: 12,
    urlImagen: APUnifi
  },
  {
    id: 'prod009',
    nombre: 'Audifonos Sony WH-1000XM4',
    categoria: 'Audio',
    fabricante: 'Sony',
    descripcion: 'Auriculares con cancelación de ruido líderes en su clase, con sonido de alta resolución.',
    precio: 1350.00,
    stock: 7,
    urlImagen: AudifonosSony
  },
  {
    id: 'prod010',
    nombre: 'Dell 7090',
    categoria: 'Computo',
    fabricante: 'Dell',
    descripcion: 'Computadora de escritorio compacta y potente, ideal para oficinas.',
    precio: 3400.00,
    stock: 5,
    urlImagen: Dell7090
  },
];

export default productos;