export interface AutoLinkRule {
  id: string;
  category: 'mobil' | 'layanan' | 'lokasi';
  keywordsId: string[];
  keywordsEn: string[];
  urlId: string;
  urlEn: string;
  titleId: string;
  titleEn: string;
}

export const autoLinkRules: AutoLinkRule[] = [
  // --- LAYANAN ---
  {
    id: 'dengan-supir',
    category: 'layanan',
    keywordsId: [
      'rental mobil dengan supir',
      'sewa mobil dengan supir',
      'dengan supir di batam',
      'dengan supir batam',
      'dengan supir',
      'dengan driver',
      'supir profesional'
    ],
    keywordsEn: [
      'car rental with driver',
      'car hire with driver',
      'with driver in batam',
      'chauffeur service',
      'with driver',
      'private driver'
    ],
    urlId: '/layanan/dengan-supir',
    urlEn: '/en/layanan/dengan-supir',
    titleId: 'Layanan Sewa Mobil dengan Supir Batam',
    titleEn: 'Car Rental with Driver in Batam',
  },
  {
    id: 'lepas-kunci',
    category: 'layanan',
    keywordsId: [
      'sewa mobil lepas kunci',
      'rental mobil lepas kunci',
      'lepas kunci batam',
      'lepas kunci',
      'self-drive batam'
    ],
    keywordsEn: [
      'self-drive car rental',
      'self drive car rental',
      'self-drive rental',
      'self drive rental',
      'self-drive batam',
      'self-drive'
    ],
    urlId: '/layanan/lepas-kunci',
    urlEn: '/en/layanan/lepas-kunci',
    titleId: 'Layanan Sewa Mobil Lepas Kunci Batam',
    titleEn: 'Self-Drive Car Rental Batam',
  },
  {
    id: 'antar-jemput',
    category: 'layanan',
    keywordsId: [
      'antar jemput bandara dan pelabuhan',
      'antar jemput pelabuhan batam',
      'antar jemput bandara batam',
      'antar jemput pelabuhan',
      'antar jemput bandara',
      'antar jemput'
    ],
    keywordsEn: [
      'airport and ferry transfer',
      'airport transfer batam',
      'ferry terminal pickup',
      'airport pickup batam',
      'ferry transfer'
    ],
    urlId: '/layanan/antar-jemput-bandara-pelabuhan',
    urlEn: '/en/layanan/antar-jemput-bandara-pelabuhan',
    titleId: 'Layanan Antar Jemput Bandara & Pelabuhan',
    titleEn: 'Airport & Ferry Terminal Transfer',
  },
  {
    id: 'sewa-bulanan',
    category: 'layanan',
    keywordsId: [
      'sewa mobil bulanan batam',
      'rental mobil bulanan',
      'sewa mobil bulanan',
      'sewa bulanan'
    ],
    keywordsEn: [
      'monthly car rental batam',
      'monthly car rental',
      'corporate car lease',
      'monthly rental'
    ],
    urlId: '/layanan/sewa-bulanan',
    urlEn: '/en/layanan/sewa-bulanan',
    titleId: 'Layanan Sewa Mobil Bulanan Batam',
    titleEn: 'Monthly Car Rental Batam',
  },
  {
    id: 'sewa-mingguan',
    category: 'layanan',
    keywordsId: [
      'sewa mobil mingguan',
      'rental mobil mingguan',
      'sewa mingguan'
    ],
    keywordsEn: [
      'weekly car rental batam',
      'weekly car rental',
      'weekly rental'
    ],
    urlId: '/layanan/sewa-mingguan',
    urlEn: '/en/layanan/sewa-mingguan',
    titleId: 'Layanan Sewa Mobil Mingguan Batam',
    titleEn: 'Weekly Car Rental Batam',
  },

  // --- LOKASI / TITIK JEMPUT ---
  {
    id: 'batu-aji',
    category: 'lokasi',
    keywordsId: [
      'kawasan industri batamindo',
      'batamindo industrial park',
      'batamindo batu aji',
      'batamindo mukakuning',
      'batu aji batam',
      'mukakuning batam',
      'batamindo',
      'mukakuning',
      'batu aji'
    ],
    keywordsEn: [
      'batamindo industrial park',
      'batamindo batu aji',
      'batamindo mukakuning',
      'batamindo',
      'mukakuning',
      'batu aji'
    ],
    urlId: '/lokasi/batu-aji',
    urlEn: '/en/lokasi/batu-aji',
    titleId: 'Titik Jemput Batu Aji & Kawasan Batamindo',
    titleEn: 'Batu Aji & Batamindo Industrial Park Pickup Hub',
  },
  {
    id: 'batam-centre',
    category: 'lokasi',
    keywordsId: [
      'pelabuhan ferry batam centre',
      'pelabuhan batam centre',
      'terminal ferry batam centre',
      'batam centre ferry terminal',
      'batam center ferry terminal',
      'batam centre',
      'batam center'
    ],
    keywordsEn: [
      'batam centre ferry terminal',
      'batam center ferry terminal',
      'batam centre international ferry terminal',
      'batam centre',
      'batam center'
    ],
    urlId: '/lokasi/batam-centre',
    urlEn: '/en/lokasi/batam-centre',
    titleId: 'Titik Jemput Pelabuhan Batam Centre',
    titleEn: 'Batam Centre Ferry Terminal Pickup Hub',
  },
  {
    id: 'harbour-bay',
    category: 'lokasi',
    keywordsId: [
      'pelabuhan ferry harbour bay',
      'pelabuhan harbour bay',
      'terminal ferry harbour bay',
      'harbour bay ferry terminal',
      'harbour bay batam',
      'harbour bay'
    ],
    keywordsEn: [
      'harbour bay international ferry terminal',
      'harbour bay ferry terminal',
      'harbour bay batam',
      'harbour bay'
    ],
    urlId: '/lokasi/harbour-bay',
    urlEn: '/en/lokasi/harbour-bay',
    titleId: 'Titik Jemput Pelabuhan Harbour Bay',
    titleEn: 'Harbour Bay Ferry Terminal Pickup Hub',
  },
  {
    id: 'hang-nadim',
    category: 'lokasi',
    keywordsId: [
      'bandara internasional hang nadim',
      'bandara hang nadim batam',
      'bandara hang nadim',
      'bandara batam',
      'hang nadim'
    ],
    keywordsEn: [
      'hang nadim international airport',
      'hang nadim airport batam',
      'hang nadim airport',
      'hang nadim'
    ],
    urlId: '/lokasi/hang-nadim',
    urlEn: '/en/lokasi/hang-nadim',
    titleId: 'Titik Jemput Bandara Hang Nadim Batam',
    titleEn: 'Hang Nadim International Airport Pickup Hub',
  },
  {
    id: 'sekupang',
    category: 'lokasi',
    keywordsId: [
      'pelabuhan ferry sekupang',
      'pelabuhan sekupang',
      'terminal ferry sekupang',
      'sekupang ferry terminal',
      'sekupang'
    ],
    keywordsEn: [
      'sekupang international ferry terminal',
      'sekupang ferry terminal',
      'sekupang batam',
      'sekupang'
    ],
    urlId: '/lokasi/sekupang',
    urlEn: '/en/lokasi/sekupang',
    titleId: 'Titik Jemput Pelabuhan Sekupang',
    titleEn: 'Sekupang Ferry Terminal Pickup Hub',
  },
  {
    id: 'punggur',
    category: 'lokasi',
    keywordsId: [
      'pelabuhan roro telaga punggur',
      'pelabuhan telaga punggur',
      'pelabuhan punggur',
      'telaga punggur',
      'punggur'
    ],
    keywordsEn: [
      'telaga punggur ferry terminal',
      'telaga punggur port',
      'telaga punggur',
      'punggur'
    ],
    urlId: '/lokasi/punggur',
    urlEn: '/en/lokasi/punggur',
    titleId: 'Titik Jemput Pelabuhan Telaga Punggur',
    titleEn: 'Telaga Punggur Ferry Terminal Pickup Hub',
  },
  {
    id: 'mega-legenda',
    category: 'lokasi',
    keywordsId: [
      'ruko mega legenda 2',
      'ruko mega legenda',
      'mega legenda batam',
      'mega legenda',
      'baloi permai'
    ],
    keywordsEn: [
      'mega legenda 2 batam',
      'mega legenda batam',
      'mega legenda'
    ],
    urlId: '/lokasi/mega-legenda',
    urlEn: '/en/lokasi/mega-legenda',
    titleId: 'Kantor Pusat Mega Legenda Batam',
    titleEn: 'Mega Legenda Head Office Pickup Hub',
  },
  {
    id: 'bengkong',
    category: 'lokasi',
    keywordsId: [
      'kawasan wisata bengkong',
      'golden prawn bengkong',
      'bengkong batam',
      'bengkong'
    ],
    keywordsEn: [
      'golden prawn bengkong',
      'bengkong batam',
      'bengkong'
    ],
    urlId: '/lokasi/bengkong',
    urlEn: '/en/lokasi/bengkong',
    titleId: 'Titik Jemput Bengkong Batam',
    titleEn: 'Bengkong Batam Pickup Hub',
  },
  {
    id: 'tiban',
    category: 'lokasi',
    keywordsId: [
      'tiban batam',
      'tiban centre',
      'tiban'
    ],
    keywordsEn: [
      'tiban batam',
      'tiban center',
      'tiban'
    ],
    urlId: '/lokasi/tiban',
    urlEn: '/en/lokasi/tiban',
    titleId: 'Titik Jemput Tiban Batam',
    titleEn: 'Tiban Batam Pickup Hub',
  },

  // --- TITIK JEMPUT PALEMBANG ---
  {
    id: 'bandara-smb2-palembang',
    category: 'lokasi',
    keywordsId: [
      'bandara internasional sultan mahmud badaruddin ii',
      'bandara sultan mahmud badaruddin ii',
      'bandara smb ii palembang',
      'bandara smb ii',
      'bandara smb 2',
      'bandara palembang'
    ],
    keywordsEn: [
      'sultan mahmud badaruddin ii international airport',
      'sultan mahmud badaruddin ii airport',
      'smb ii airport palembang',
      'smb ii airport',
      'palembang airport'
    ],
    urlId: '/lokasi/bandara-smb2-palembang',
    urlEn: '/en/lokasi/bandara-smb2-palembang',
    titleId: 'Titik Jemput Bandara SMB II Palembang',
    titleEn: 'Sultan Mahmud Badaruddin II Airport Pickup Hub',
  },
  {
    id: 'pelabuhan-tanjung-api-api',
    category: 'lokasi',
    keywordsId: [
      'pelabuhan penyeberangan tanjung api-api',
      'pelabuhan tanjung api-api',
      'pelabuhan tanjung api api',
      'tanjung api-api palembang',
      'tanjung api api palembang',
      'tanjung api-api',
      'tanjung api api',
      'pelabuhan taa'
    ],
    keywordsEn: [
      'tanjung api-api ferry port',
      'tanjung api-api port',
      'tanjung api api port',
      'tanjung api-api palembang',
      'tanjung api api'
    ],
    urlId: '/lokasi/pelabuhan-tanjung-api-api',
    urlEn: '/en/lokasi/pelabuhan-tanjung-api-api',
    titleId: 'Titik Jemput Pelabuhan Tanjung Api-Api',
    titleEn: 'Tanjung Api-Api Ferry Port Pickup Hub',
  },
  {
    id: 'stasiun-kertapati-lrt-palembang',
    category: 'lokasi',
    keywordsId: [
      'stasiun kereta api kertapati',
      'stasiun kertapati palembang',
      'stasiun kertapati',
      'stasiun lrt palembang',
      'lrt sumatera selatan',
      'lrt palembang'
    ],
    keywordsEn: [
      'kertapati railway station palembang',
      'kertapati railway station',
      'kertapati station',
      'palembang lrt station',
      'palembang lrt'
    ],
    urlId: '/lokasi/stasiun-kertapati-lrt-palembang',
    urlEn: '/en/lokasi/stasiun-kertapati-lrt-palembang',
    titleId: 'Titik Jemput Stasiun Kertapati & LRT Palembang',
    titleEn: 'Kertapati Station & Palembang LRT Pickup Hub',
  },
  {
    id: 'pusat-kota-sudirman-palembang',
    category: 'lokasi',
    keywordsId: [
      'jalan jendral sudirman palembang',
      'jalan jenderal sudirman palembang',
      'jalan sudirman palembang',
      'palembang icon mall',
      'palembang icon',
      'sudirman palembang'
    ],
    keywordsEn: [
      'jalan jendral sudirman palembang',
      'palembang icon mall',
      'palembang icon',
      'central palembang'
    ],
    urlId: '/lokasi/pusat-kota-sudirman-palembang',
    urlEn: '/en/lokasi/pusat-kota-sudirman-palembang',
    titleId: 'Titik Jemput Pusat Kota Sudirman & Palembang Icon',
    titleEn: 'Sudirman City Center & Palembang Icon Pickup Hub',
  },
  {
    id: 'ptc-mall-r-sukamto-palembang',
    category: 'lokasi',
    keywordsId: [
      'palembang trade center',
      'ptc mall palembang',
      'ptc mall',
      'jalan r sukamto palembang',
      'jalan r sukamto',
      'r sukamto palembang',
      'r sukamto',
      'hotel novotel palembang',
      'novotel palembang'
    ],
    keywordsEn: [
      'palembang trade center mall',
      'ptc mall palembang',
      'ptc mall',
      'jalan r sukamto',
      'novotel palembang'
    ],
    urlId: '/lokasi/ptc-mall-r-sukamto-palembang',
    urlEn: '/en/lokasi/ptc-mall-r-sukamto-palembang',
    titleId: 'Titik Jemput R. Sukamto & PTC Mall Palembang',
    titleEn: 'R. Sukamto & PTC Mall Palembang Pickup Hub',
  },
  {
    id: 'jakabaring-sport-city-palembang',
    category: 'lokasi',
    keywordsId: [
      'jakabaring sport city palembang',
      'jakabaring sport city',
      'stadion gelora sriwijaya jakabaring',
      'stadion gelora sriwijaya',
      'opi mall jakabaring',
      'opi mall palembang',
      'opi mall',
      'jakabaring palembang',
      'jakabaring'
    ],
    keywordsEn: [
      'jakabaring sport city palembang',
      'jakabaring sport city',
      'gelora sriwijaya stadium',
      'opi mall jakabaring',
      'jakabaring palembang',
      'jakabaring'
    ],
    urlId: '/lokasi/jakabaring-sport-city-palembang',
    urlEn: '/en/lokasi/jakabaring-sport-city-palembang',
    titleId: 'Titik Jemput Jakabaring Sport City Palembang',
    titleEn: 'Jakabaring Sport City Palembang Pickup Hub',
  },

  // --- UNIT MOBIL ---
  {
    id: 'innova-reborn',
    category: 'mobil',
    keywordsId: [
      'toyota kijang innova reborn',
      'toyota innova reborn',
      'kijang innova reborn',
      'innova reborn matic',
      'innova reborn diesel',
      'innova reborn'
    ],
    keywordsEn: [
      'toyota kijang innova reborn',
      'toyota innova reborn',
      'innova reborn diesel',
      'innova reborn'
    ],
    urlId: '/mobil/innova-reborn',
    urlEn: '/en/car/innova-reborn',
    titleId: 'Rental Toyota Innova Reborn Batam',
    titleEn: 'Toyota Innova Reborn Car Rental Batam',
  },
  {
    id: 'innova-zenix',
    category: 'mobil',
    keywordsId: [
      'toyota innova zenix hybrid',
      'toyota innova zenix',
      'innova zenix hybrid',
      'innova zenix'
    ],
    keywordsEn: [
      'toyota innova zenix hybrid',
      'toyota innova zenix',
      'innova zenix'
    ],
    urlId: '/mobil/innova-zenix',
    urlEn: '/en/car/innova-zenix',
    titleId: 'Rental Toyota Innova Zenix Batam',
    titleEn: 'Toyota Innova Zenix Car Rental Batam',
  },
  {
    id: 'toyota-avanza',
    category: 'mobil',
    keywordsId: [
      'all new toyota avanza',
      'all new avanza',
      'toyota avanza',
      'avanza veloz',
      'avanza batam',
      'avanza'
    ],
    keywordsEn: [
      'all new toyota avanza',
      'toyota avanza batam',
      'toyota avanza',
      'avanza'
    ],
    urlId: '/mobil/toyota-avanza',
    urlEn: '/en/car/toyota-avanza',
    titleId: 'Rental Toyota Avanza Batam',
    titleEn: 'Toyota Avanza Car Rental Batam',
  },
  {
    id: 'hiace-commuter',
    category: 'mobil',
    keywordsId: [
      'toyota hiace commuter 15 seat',
      'toyota hiace commuter',
      'hiace commuter batam',
      'hiace commuter',
      'mobil hiace'
    ],
    keywordsEn: [
      'toyota hiace commuter 15 seater',
      'toyota hiace commuter',
      'hiace commuter batam',
      'hiace commuter'
    ],
    urlId: '/mobil/hiace-commuter',
    urlEn: '/en/car/hiace-commuter',
    titleId: 'Rental Toyota Hiace Commuter Batam',
    titleEn: 'Toyota Hiace Commuter Rental Batam',
  },
  {
    id: 'hiace-premio',
    category: 'mobil',
    keywordsId: [
      'toyota hiace premio vip',
      'toyota hiace premio',
      'hiace premio luxury',
      'hiace premio'
    ],
    keywordsEn: [
      'toyota hiace premio luxury',
      'toyota hiace premio',
      'hiace premio'
    ],
    urlId: '/mobil/hiace-premio',
    urlEn: '/en/car/hiace-premio',
    titleId: 'Rental Toyota Hiace Premio Batam',
    titleEn: 'Toyota Hiace Premio Luxury Rental Batam',
  },
  {
    id: 'alphard-new-gen-4',
    category: 'mobil',
    keywordsId: [
      'toyota alphard new gen 4',
      'toyota alphard gen 4',
      'alphard gen 4',
      'alphard new gen 4',
      'alphard terbaru'
    ],
    keywordsEn: [
      'toyota alphard gen 4',
      'toyota alphard new gen 4',
      'alphard gen 4',
      'alphard new gen 4'
    ],
    urlId: '/mobil/alphard-new-gen-4',
    urlEn: '/en/car/alphard-new-gen-4',
    titleId: 'Rental Alphard New Gen 4 Batam',
    titleEn: 'Toyota Alphard Gen 4 Rental Batam',
  },
  {
    id: 'alphard-gen-3',
    category: 'mobil',
    keywordsId: [
      'toyota alphard transformer',
      'toyota alphard gen 3',
      'alphard gen 3',
      'toyota alphard'
    ],
    keywordsEn: [
      'toyota alphard transformer',
      'toyota alphard gen 3',
      'alphard gen 3',
      'toyota alphard'
    ],
    urlId: '/mobil/alphard-gen-3',
    urlEn: '/en/car/alphard-gen-3',
    titleId: 'Rental Toyota Alphard Gen 3 Batam',
    titleEn: 'Toyota Alphard Gen 3 Rental Batam',
  },
  {
    id: 'fortuner-gr-4x4',
    category: 'mobil',
    keywordsId: [
      'toyota fortuner gr 4x4',
      'fortuner gr 4x4',
      'fortuner 4x4'
    ],
    keywordsEn: [
      'toyota fortuner gr 4x4',
      'fortuner gr 4x4',
      'fortuner 4x4'
    ],
    urlId: '/mobil/fortuner-gr-4x4',
    urlEn: '/en/car/fortuner-gr-4x4',
    titleId: 'Rental Fortuner GR 4x4 Batam',
    titleEn: 'Toyota Fortuner GR 4x4 Rental Batam',
  },
  {
    id: 'fortuner-gr-4x2',
    category: 'mobil',
    keywordsId: [
      'toyota fortuner gr 4x2',
      'fortuner gr 4x2',
      'fortuner gr sport'
    ],
    keywordsEn: [
      'toyota fortuner gr 4x2',
      'fortuner gr 4x2',
      'fortuner gr sport'
    ],
    urlId: '/mobil/fortuner-gr-4x2',
    urlEn: '/en/car/fortuner-gr-4x2',
    titleId: 'Rental Fortuner GR 4x2 Batam',
    titleEn: 'Toyota Fortuner GR 4x2 Rental Batam',
  },
  {
    id: 'fortuner',
    category: 'mobil',
    keywordsId: [
      'toyota fortuner vrz',
      'toyota fortuner',
      'fortuner vrz'
    ],
    keywordsEn: [
      'toyota fortuner vrz',
      'toyota fortuner',
      'fortuner vrz'
    ],
    urlId: '/mobil/fortuner',
    urlEn: '/en/car/fortuner',
    titleId: 'Rental Toyota Fortuner VRZ Batam',
    titleEn: 'Toyota Fortuner VRZ Rental Batam',
  },
  {
    id: 'pajero',
    category: 'mobil',
    keywordsId: [
      'mitsubishi pajero sport dakar',
      'mitsubishi pajero sport',
      'pajero sport dakar',
      'pajero sport',
      'pajero'
    ],
    keywordsEn: [
      'mitsubishi pajero sport dakar',
      'mitsubishi pajero sport',
      'pajero sport'
    ],
    urlId: '/mobil/pajero',
    urlEn: '/en/car/pajero',
    titleId: 'Rental Mitsubishi Pajero Sport Batam',
    titleEn: 'Mitsubishi Pajero Sport Rental Batam',
  },
  {
    id: 'xpander',
    category: 'mobil',
    keywordsId: [
      'mitsubishi xpander ultimate',
      'mitsubishi xpander',
      'xpander batam',
      'xpander'
    ],
    keywordsEn: [
      'mitsubishi xpander',
      'xpander batam',
      'xpander'
    ],
    urlId: '/mobil/xpander',
    urlEn: '/en/car/xpander',
    titleId: 'Rental Mitsubishi Xpander Batam',
    titleEn: 'Mitsubishi Xpander Rental Batam',
  },
  {
    id: 'hilux-double-cabin-4x4',
    category: 'mobil',
    keywordsId: [
      'toyota hilux double cabin 4x4',
      'toyota hilux double cabin',
      'hilux double cabin 4x4',
      'hilux 4x4 batam',
      'hilux 4x4'
    ],
    keywordsEn: [
      'toyota hilux double cabin 4x4',
      'toyota hilux double cabin',
      'hilux 4x4 batam',
      'hilux 4x4'
    ],
    urlId: '/mobil/hilux-double-cabin-4x4',
    urlEn: '/en/car/hilux-double-cabin-4x4',
    titleId: 'Rental Toyota Hilux Double Cabin 4x4 Batam',
    titleEn: 'Toyota Hilux Double Cabin 4x4 Rental Batam',
  },
  {
    id: 'isuzu-elf-minibus',
    category: 'mobil',
    keywordsId: [
      'isuzu elf minibus long 19 seat',
      'isuzu elf minibus long',
      'isuzu elf minibus',
      'isuzu elf batam',
      'elf minibus'
    ],
    keywordsEn: [
      'isuzu elf minibus long 19 seater',
      'isuzu elf minibus long',
      'isuzu elf minibus',
      'isuzu elf batam'
    ],
    urlId: '/mobil/isuzu-elf-minibus',
    urlEn: '/en/car/isuzu-elf-minibus',
    titleId: 'Rental Isuzu Elf Minibus Long Batam',
    titleEn: 'Isuzu Elf Minibus Long Rental Batam',
  },
  {
    id: 'land-cruiser',
    category: 'mobil',
    keywordsId: [
      'toyota land cruiser 300',
      'toyota land cruiser',
      'land cruiser 300',
      'land cruiser'
    ],
    keywordsEn: [
      'toyota land cruiser 300',
      'toyota land cruiser',
      'land cruiser'
    ],
    urlId: '/mobil/land-cruiser',
    urlEn: '/en/car/land-cruiser',
    titleId: 'Rental Toyota Land Cruiser Batam',
    titleEn: 'Toyota Land Cruiser Rental Batam',
  },
  {
    id: 'toyota-rush',
    category: 'mobil',
    keywordsId: [
      'all new toyota rush',
      'toyota rush gr sport',
      'toyota rush',
      'rush gr sport'
    ],
    keywordsEn: [
      'all new toyota rush',
      'toyota rush gr sport',
      'toyota rush'
    ],
    urlId: '/mobil/toyota-rush',
    urlEn: '/en/car/toyota-rush',
    titleId: 'Rental Toyota Rush Batam',
    titleEn: 'Toyota Rush Rental Batam',
  },
  {
    id: 'daihatsu-terios',
    category: 'mobil',
    keywordsId: [
      'all new daihatsu terios',
      'daihatsu terios r custom',
      'daihatsu terios',
      'terios'
    ],
    keywordsEn: [
      'all new daihatsu terios',
      'daihatsu terios',
      'terios'
    ],
    urlId: '/mobil/daihatsu-terios',
    urlEn: '/en/car/daihatsu-terios',
    titleId: 'Rental Daihatsu Terios Batam',
    titleEn: 'Daihatsu Terios Rental Batam',
  },
  {
    id: 'suzuki-xl7',
    category: 'mobil',
    keywordsId: [
      'suzuki xl7 alpha',
      'suzuki xl7 hybrid',
      'suzuki xl7',
      'xl7 hybrid'
    ],
    keywordsEn: [
      'suzuki xl7 alpha',
      'suzuki xl7 hybrid',
      'suzuki xl7'
    ],
    urlId: '/mobil/suzuki-xl7',
    urlEn: '/en/car/suzuki-xl7',
    titleId: 'Rental Suzuki XL7 Batam',
    titleEn: 'Suzuki XL7 Rental Batam',
  },
  {
    id: 'ertiga-hybrid',
    category: 'mobil',
    keywordsId: [
      'suzuki all new ertiga hybrid',
      'suzuki ertiga hybrid',
      'ertiga hybrid'
    ],
    keywordsEn: [
      'suzuki all new ertiga hybrid',
      'suzuki ertiga hybrid',
      'ertiga hybrid'
    ],
    urlId: '/mobil/ertiga-hybrid',
    urlEn: '/en/car/ertiga-hybrid',
    titleId: 'Rental Suzuki Ertiga Hybrid Batam',
    titleEn: 'Suzuki Ertiga Hybrid Rental Batam',
  },
  {
    id: 'toyota-calya',
    category: 'mobil',
    keywordsId: [
      'toyota calya matic',
      'toyota calya',
      'calya'
    ],
    keywordsEn: [
      'toyota calya',
      'calya'
    ],
    urlId: '/mobil/toyota-calya',
    urlEn: '/en/car/toyota-calya',
    titleId: 'Rental Toyota Calya Batam',
    titleEn: 'Toyota Calya Rental Batam',
  },
  {
    id: 'daihatsu-sigra',
    category: 'mobil',
    keywordsId: [
      'daihatsu sigra matic',
      'daihatsu sigra',
      'sigra'
    ],
    keywordsEn: [
      'daihatsu sigra',
      'sigra'
    ],
    urlId: '/mobil/daihatsu-sigra',
    urlEn: '/en/car/daihatsu-sigra',
    titleId: 'Rental Daihatsu Sigra Batam',
    titleEn: 'Daihatsu Sigra Rental Batam',
  }
];
