import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import { useState } from 'react'
import { motion } from 'framer-motion'

// Fix leaflet marker icons
const DefaultIcon = L.icon({
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
})

L.Marker.prototype.options.icon = DefaultIcon

interface Store {
  id: string
  name: string
  address: string
  city: string
  phone: string
  position: [number, number]
  hours: string
  features: string[]
}

const stores: Store[] = [
  {
    id: '1',
    name: 'Sam Levy\'s Village Store',
    address: 'Borowdale Road',
    city: 'Harare, Zimbabwe',
    phone: '+263 242 123456',
    position: [-17.7602336,31.0891868], 
    hours: 'Mon-Sat: 8AM - 8PM\nSun: 9AM - 6PM',
    features: ['wheelchair', 'parking', 'tasting']
  },
  {
    id: '2',
    name: 'Avondale Market',
    address: 'Avondale Shopping Centre',
    city: 'Harare, Zimbabwe',
    phone: '+263 242 234567',
    position: [-17.801668, 31.037731], 
    hours: 'Mon-Fri: 7:30AM - 7PM\nSat-Sun: 8AM - 5PM',
    features: ['parking', 'delivery']
  },
  {
    id: '3',
    name: 'Eastgate Mall Store',
    address: 'Robert Mugabe Road',
    city: 'Harare, Zimbabwe',
    phone: '+263 242 345678',
    position: [-17.832105, 31.053300], 
    hours: 'Daily: 9AM - 9PM',
    features: ['tasting', 'outdoor']
  },
];

export const StoreLocator = () => {
  const [selectedStore, setSelectedStore] = useState<Store | null>(null)
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([])

  const filteredStores = stores.filter(store => {
    const matchesSearch = store.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      store.city.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesFeatures = selectedFeatures.length === 0 || 
      selectedFeatures.every(feature => store.features.includes(feature))
    return matchesSearch && matchesFeatures
  })

  const featureFilters = [
    { id: 'wheelchair', label: 'Wheelchair Accessible' },
    { id: 'parking', label: 'Parking Available' },
    { id: 'tasting', label: 'Tasting Bar' },
    { id: 'delivery', label: 'Local Delivery' },
    { id: 'outdoor', label: 'Outdoor Seating' },
  ]

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-7xl mx-auto px-4 py-12"
      >
        <div className="text-center mb-12 mt-20">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Store Locator
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Find a Dopiro retailer near you
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <input
              type="text"
              placeholder="Search by city or store name..."
              className="flex-1 p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 transition-colors">
              Use My Location
            </button>
          </div>

          <div className="flex flex-wrap gap-3 mb-6">
            {featureFilters.map(filter => (
              <button
                key={filter.id}
                onClick={() => setSelectedFeatures(prev => 
                  prev.includes(filter.id) 
                    ? prev.filter(f => f !== filter.id) 
                    : [...prev, filter.id]
                )}
                className={`px-4 py-2 rounded-full text-sm ${
                  selectedFeatures.includes(filter.id)
                    ? 'bg-orange-600 text-white'
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-[600px]">
            <div className="h-full overflow-y-auto pr-4">
              {filteredStores.map(store => (
                <div
                  key={store.id}
                  className="p-4 mb-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:shadow-md transition-shadow cursor-pointer"
                  onClick={() => setSelectedStore(store)}
                >
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {store.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-2">
                    {store.address}<br/>
                    {store.city}
                  </p>
                  <p className="text-gray-500 dark:text-gray-500 text-sm mb-2">
                    {store.phone}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {store.features.map(feature => (
                      <span
                        key={feature}
                        className="px-2 py-1 bg-orange-100 dark:bg-orange-900 text-orange-600 dark:text-orange-200 text-xs rounded-full"
                      >
                        {featureFilters.find(f => f.id === feature)?.label}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="h-full rounded-lg overflow-hidden relative">
              <MapContainer
              center={[-19.0154, 29.1549]} 
                zoom={4}
                className="h-full w-full z-0"
              >
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />

                {filteredStores.map(store => (
                  <Marker
                    key={store.id}
                    position={store.position}
                    eventHandlers={{
                      click: () => setSelectedStore(store),
                    }}
                  >
                    <Popup>
                      <div className="text-gray-800">
                        <h3 className="font-bold mb-2">{store.name}</h3>
                        <p className="text-sm">{store.address}</p>
                        <p className="text-sm">{store.city}</p>
                        <p className="text-sm mt-2">{store.phone}</p>
                      </div>
                    </Popup>
                  </Marker>
                ))}
              </MapContainer>
            </div>
          </div>
        </div>

        {selectedStore && (
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 mt-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              {selectedStore.name} Details
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Address</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {selectedStore.address}<br/>
                  {selectedStore.city}
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Hours</h3>
                <pre className="text-gray-600 dark:text-gray-400 whitespace-pre-wrap">
                  {selectedStore.hours}
                </pre>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Features</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedStore.features.map(feature => (
                    <span
                      key={feature}
                      className="px-2 py-1 bg-orange-100 dark:bg-orange-900 text-orange-600 dark:text-orange-200 text-xs rounded-full"
                    >
                      {featureFilters.find(f => f.id === feature)?.label}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 text-center dark:text-white mb-2">Directions</h3>
                <a  href="/products" class="flex justify-center" >
               <button  className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition-colors">Get Directions</button>  
                </a>
              </div>
            </div>
          </div>
        )}
      </motion.div>
    </div>
  )
}