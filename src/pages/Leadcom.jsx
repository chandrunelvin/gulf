import { useEffect } from 'react'
import PartnerPage from '../components/PartnerPage.jsx'

const seoTitle = 'Leadcom Auditorium & Cinema Seating Supplier Oman | Muscat'
const seoDescription = 'GST Concepts supplies Leadcom auditorium, retractable, and cinema seating in Muscat and Oman including a confirmed local install at Cheltenham Muscat.'

const gallery = [
  { src: 'https://www.furniconcepts.com/images/leadcom/products/AUDITORIUM-SEATING-CHAIR-A03.jpg', alt: 'Leadcom FIPO LUXE — Auditorium Seating', caption: 'FIPO LUXE', category: 'auditorium' },
  { src: 'https://www.furniconcepts.com/images/leadcom/products/Auditorium-chair-L-A02-1-1.jpg', alt: 'Leadcom Arthur Lite — Auditorium Seating', caption: 'Arthur Lite', category: 'auditorium' },
  { src: 'https://www.furniconcepts.com/images/leadcom/products/20602W-auditorium-chair-with-tablet-02.jpg', alt: 'Leadcom Arcadia Elite Wood — Auditorium Seating', caption: 'Arcadia Elite Wood', category: 'auditorium' },
  { src: 'https://www.furniconcepts.com/images/leadcom/products/leadcomseating-20601-1.jpg', alt: 'Leadcom Performer Signature — Auditorium Seating', caption: 'Performer Signature', category: 'auditorium' },
  { src: 'https://www.furniconcepts.com/images/leadcom/products/LS-19601W.jpg', alt: 'Leadcom Lano Wood — Auditorium Seating', caption: 'Lano Wood', category: 'auditorium' },
  { src: 'https://www.furniconcepts.com/images/leadcom/products/19601P-2-1.jpg', alt: 'Leadcom Lano Plastic — Auditorium Seating', caption: 'Lano Plastic', category: 'auditorium' },
  { src: 'https://www.furniconcepts.com/images/leadcom/products/10601P-auditorium-chair-5.jpg', alt: 'Leadcom Louisville Plastic — Auditorium Seating', caption: 'Louisville Plastic', category: 'auditorium' },
  { src: 'https://www.furniconcepts.com/images/leadcom/products/leadcom-seating-auditorium-seating-LS-10601WS_3.jpg', alt: 'Leadcom Louisville Wood — Auditorium Seating', caption: 'Louisville Wood', category: 'auditorium' },
  { src: 'https://www.furniconcepts.com/images/leadcom/products/leadcom-seating-auditorium-seating-LS-6618at_2.jpg', alt: 'Leadcom McLane Wood — Auditorium Seating', caption: 'McLane Wood', category: 'auditorium' },
  { src: 'https://www.furniconcepts.com/images/leadcom/products/LS-21602A-1.jpg', alt: 'Leadcom Herman Lux — Auditorium Seating', caption: 'Herman Lux', category: 'auditorium' },
  { src: 'https://www.furniconcepts.com/images/leadcom/products/A11-0.jpg', alt: 'Leadcom Adelio — Auditorium Seating', caption: 'Adelio', category: 'auditorium' },
  { src: 'https://www.furniconcepts.com/images/leadcom/products/A10-1.jpg', alt: 'Leadcom Brooklyn — Auditorium Seating', caption: 'Brooklyn', category: 'auditorium' },
  { src: 'https://www.furniconcepts.com/images/leadcom/products/auditorium-seating-with-writing-tablet-7603A-1-2.jpg', alt: 'Leadcom Metropolis Plus — Auditorium Seating', caption: 'Metropolis Plus', category: 'auditorium' },
  { src: 'https://www.furniconcepts.com/images/leadcom/products/12601D-1-1.jpg', alt: 'Leadcom Molio Wood Plus — Auditorium Seating', caption: 'Molio Wood Plus', category: 'auditorium' },
  { src: 'https://www.furniconcepts.com/images/leadcom/products/LS-9614-auditorium-seating.jpg', alt: 'Leadcom Augsburg — Auditorium Seating', caption: 'Augsburg', category: 'auditorium' },
  { src: 'https://www.furniconcepts.com/images/leadcom/products/leadcom-auditorium-seating-herman-LS-9612_4.jpg', alt: 'Leadcom Herman Signature — Auditorium Seating', caption: 'Herman Signature', category: 'auditorium' },
  { src: 'https://www.furniconcepts.com/images/leadcom/products/leadcom-seating-auditorium-seating-LS-620T_2.jpg', alt: 'Leadcom Hampton — Auditorium Seating', caption: 'Hampton', category: 'auditorium' },
  { src: 'https://www.furniconcepts.com/images/leadcom/products/Snipaste_2022-06-17_14-21-49.jpg', alt: 'Leadcom Victoria — Auditorium Seating', caption: 'Victoria', category: 'auditorium' },
  { src: 'https://www.furniconcepts.com/images/leadcom/products/leadcom-auditorium-seating-LS-15608_6.jpg', alt: 'Leadcom Palace — Auditorium Seating', caption: 'Palace', category: 'auditorium' },
  { src: 'https://www.furniconcepts.com/images/leadcom/products/leadcom-seating-auditorium-seating-LS-6618_4.jpg', alt: 'Leadcom McLane Upholstery — Auditorium Seating', caption: 'McLane Upholstery', category: 'auditorium' },
  { src: 'https://www.furniconcepts.com/images/leadcom/products/Auditorium-chair-605D-1-2.jpg', alt: 'Leadcom Monto — Auditorium Seating', caption: 'Monto', category: 'auditorium' },
  { src: 'https://www.furniconcepts.com/images/leadcom/products/leadcom-seating-auditorium-seating-LS-12601_1.jpg', alt: 'Leadcom Molio Upholstered — Auditorium Seating', caption: 'Molio Upholstered', category: 'auditorium' },
  { src: 'https://www.furniconcepts.com/images/leadcom/products/MILLENNIUM-PREMIUM-1.jpg', alt: 'Leadcom Millennium — Cinema & VIP Seating', caption: 'Millennium', category: 'cinema' },
  { src: 'https://www.furniconcepts.com/images/leadcom/products/819-cinema-recliner.jpg', alt: 'Leadcom Gavino — Cinema & VIP Seating', caption: 'Gavino', category: 'cinema' },
  { src: 'https://www.furniconcepts.com/images/leadcom/products/Gavino-1.jpg', alt: 'Leadcom Gavino — Cinema & VIP Seating', caption: 'Gavino', category: 'cinema' },
  { src: 'https://www.furniconcepts.com/images/leadcom/products/vip-cinema-seating-813C-00.jpg', alt: 'Leadcom Galaxy — Cinema & VIP Seating', caption: 'Galaxy', category: 'cinema' },
  { src: 'https://www.furniconcepts.com/images/leadcom/products/vip-cinema-recliner-813C-1.jpg', alt: 'Leadcom Galaxy — Cinema & VIP Seating', caption: 'Galaxy', category: 'cinema' },
  { src: 'https://www.furniconcepts.com/images/leadcom/products/leadcom-seating-LS-819-gravity-1.jpg', alt: 'Leadcom Garzia — Cinema & VIP Seating', caption: 'Garzia', category: 'cinema' },
  { src: 'https://www.furniconcepts.com/images/leadcom/products/vip-cinema-seating-819-0.jpg', alt: 'Leadcom Garzia — Cinema & VIP Seating', caption: 'Garzia', category: 'cinema' },
  { src: 'https://www.furniconcepts.com/images/leadcom/products/chelsea-zero-gravity-1.jpg', alt: 'Leadcom Chelsea — Cinema & VIP Seating', caption: 'Chelsea', category: 'cinema' },
  { src: 'https://www.furniconcepts.com/images/leadcom/products/1-4.jpg', alt: 'Leadcom Supreme — Cinema & VIP Seating', caption: 'Supreme', category: 'cinema' },
  { src: 'https://www.furniconcepts.com/images/leadcom/products/01.jpg', alt: 'Leadcom Barron — Cinema & VIP Seating', caption: 'Barron', category: 'cinema' },
  { src: 'https://www.furniconcepts.com/images/leadcom/products/leadcom-cinema-seating-vip-recliner-LS-811_3.jpg', alt: 'Leadcom Royal — Cinema & VIP Seating', caption: 'Royal', category: 'cinema' },
  { src: 'https://www.furniconcepts.com/images/leadcom/products/leadcom-cinema-seating-vip-recliner-LS-805_1.jpg', alt: 'Leadcom Lorenz — Cinema & VIP Seating', caption: 'Lorenz', category: 'cinema' },
  { src: 'https://www.furniconcepts.com/images/leadcom/products/untitled-2.png', alt: 'Leadcom Dino — Cinema & VIP Seating', caption: 'Dino', category: 'cinema' },
  { src: 'https://www.furniconcepts.com/images/leadcom/products/Rona-lounger-1.jpg', alt: 'Leadcom Rona — Cinema & VIP Seating', caption: 'Rona', category: 'cinema' },
  { src: 'https://www.furniconcepts.com/images/leadcom/products/AUDITORIUM-CHAIR-L-A01-1-01.jpg', alt: 'Leadcom Leighton Lite — Education & Lecture Seating', caption: 'Leighton Lite', category: 'education' },
  { src: 'https://www.furniconcepts.com/images/leadcom/products/420-2.jpg', alt: 'Leadcom Titan — Education & Lecture Seating', caption: 'Titan', category: 'education' },
  { src: 'https://www.furniconcepts.com/images/leadcom/products/421-4.jpg', alt: 'Leadcom Alano Series — Education & Lecture Seating', caption: 'Alano Series', category: 'education' },
  { src: 'https://www.furniconcepts.com/images/leadcom/products/Snipaste_2023-06-30_11-51-42.jpg', alt: 'Leadcom Kyle — Education & Lecture Seating', caption: 'Kyle', category: 'education' },
  { src: 'https://www.furniconcepts.com/images/leadcom/products/E08-1.jpg', alt: 'Leadcom Alano Lite — Education & Lecture Seating', caption: 'Alano Lite', category: 'education' },
  { src: 'https://www.furniconcepts.com/images/leadcom/products/E07-1.jpg', alt: 'Leadcom Atticus — Education & Lecture Seating', caption: 'Atticus', category: 'education' },
  { src: 'https://www.furniconcepts.com/images/leadcom/products/E06-1.jpg', alt: 'Leadcom Hudson — Education & Lecture Seating', caption: 'Hudson', category: 'education' },
  { src: 'https://www.furniconcepts.com/images/leadcom/products/lecture-desk-and-chair-E05-1.jpg', alt: 'Leadcom Kyle Lite — Education & Lecture Seating', caption: 'Kyle Lite', category: 'education' },
  { src: 'https://www.furniconcepts.com/images/leadcom/products/423-plywood-series.jpg', alt: 'Leadcom Carlo Series — Education & Lecture Seating', caption: 'Carlo Series', category: 'education' },
  { src: 'https://www.furniconcepts.com/images/leadcom/products/ELIOT-LS-435-1.jpg', alt: 'Leadcom Eliot Series — Education & Lecture Seating', caption: 'Eliot Series', category: 'education' },
  { src: 'https://www.furniconcepts.com/images/leadcom/products/426-plywood-series.jpg', alt: 'Leadcom Matias Series — Education & Lecture Seating', caption: 'Matias Series', category: 'education' },
  { src: 'https://www.furniconcepts.com/images/leadcom/products/425-two-seats.jpg', alt: 'Leadcom Noah Series — Education & Lecture Seating', caption: 'Noah Series', category: 'education' },
  { src: 'https://www.furniconcepts.com/images/leadcom/products/Snipaste_2023-06-30_12-00-05.jpg', alt: 'Leadcom Kaine — Education & Lecture Seating', caption: 'Kaine', category: 'education' },
  { src: 'https://www.furniconcepts.com/images/leadcom/products/leadcom-education-seating-401-1.jpg', alt: 'Leadcom Keeva — Education & Lecture Seating', caption: 'Keeva', category: 'education' },
  { src: 'https://www.furniconcepts.com/images/leadcom/products/LECTURE-SEAT-M03-1.jpg', alt: 'Leadcom Vito — Education & Lecture Seating', caption: 'Vito', category: 'education' },
  { src: 'https://www.furniconcepts.com/images/leadcom/products/CATO-L-M02-Series-1.jpg', alt: 'Leadcom Cato Series — Education & Lecture Seating', caption: 'Cato Series', category: 'education' },
  { src: 'https://www.furniconcepts.com/images/leadcom/products/MEO-L-M01-Series-1.jpg', alt: 'Leadcom Meo Series — Education & Lecture Seating', caption: 'Meo Series', category: 'education' },
  { src: 'https://www.furniconcepts.com/images/leadcom/products/QF2.jpg', alt: 'Leadcom Eden QF2 — Meeting Tables', caption: 'Eden QF2', category: 'tables' },
  { src: 'https://www.furniconcepts.com/images/leadcom/products/breakroom-table-QF3-2.jpg', alt: 'Leadcom Oxford QF3 — Meeting Tables', caption: 'Oxford QF3', category: 'tables' },
  { src: 'https://www.furniconcepts.com/images/leadcom/products/TABLE-2.jpg', alt: 'Leadcom HUGO QF36E — Meeting Tables', caption: 'HUGO QF36E', category: 'tables' },
  { src: 'https://www.furniconcepts.com/images/leadcom/products/breakroom-table-420MT.jpg', alt: 'Leadcom HARRIS MT LS-4-20MT — Meeting Tables', caption: 'HARRIS MT LS-4-20MT', category: 'tables' },
  { src: 'https://www.furniconcepts.com/images/leadcom/products/breakroom-table-418-23.jpg', alt: 'Leadcom ODEON MT LS-418MT — Meeting Tables', caption: 'ODEON MT LS-418MT', category: 'tables' },
  { src: 'https://www.furniconcepts.com/images/leadcom/products/Muno-7801-5.jpg', alt: 'Leadcom MUNO LS-7801 — Meeting Tables', caption: 'MUNO LS-7801', category: 'tables' },
  { src: 'https://www.furniconcepts.com/images/leadcom/products/Adora-7802-3.jpg', alt: 'Leadcom ADORA LS-7802 — Meeting Tables', caption: 'ADORA LS-7802', category: 'tables' },
  { src: 'https://www.furniconcepts.com/images/leadcom/products/Vati-7803-4.jpg', alt: 'Leadcom VATI LS-7803 — Meeting Tables', caption: 'VATI LS-7803', category: 'tables' },
  { src: 'https://www.furniconcepts.com/images/leadcom/products/Leadcom-Modular-Lounge-Seating-3.jpg', alt: 'Leadcom PELEO Series L Shape — Meeting Tables', caption: 'PELEO Series L Shape', category: 'tables' },
  { src: 'https://www.furniconcepts.com/images/leadcom/products/Leadcom-Modular-Lounge-Seating-4.jpg', alt: 'Leadcom PELEO Series S Shape — Meeting Tables', caption: 'PELEO Series S Shape', category: 'tables' },
  { src: 'https://www.furniconcepts.com/images/leadcom/products/Leadcom-Modular-Lounge-Seating-2.jpg', alt: 'Leadcom PELEO Series Round — Meeting Tables', caption: 'PELEO Series Round', category: 'tables' },
  { src: 'https://www.furniconcepts.com/images/leadcom/products/718-23.jpg', alt: 'Leadcom ODEON LS-418 — Meeting Tables', caption: 'ODEON LS-418', category: 'tables' },
  { src: 'https://www.furniconcepts.com/images/leadcom/products/Harris-office-workstation-lifan-furniture-8.jpg', alt: 'Leadcom HARRIS LS-418ST — Meeting Tables', caption: 'HARRIS LS-418ST', category: 'tables' },
  { src: 'https://www.furniconcepts.com/images/leadcom/products/Apollo-office-workstation-lifan-furniture-1.jpg', alt: 'Leadcom APOLLO LS-419 — Meeting Tables', caption: 'APOLLO LS-419', category: 'tables' },
  { src: 'https://www.furniconcepts.com/images/leadcom/products/Delvin-2.jpg', alt: 'Leadcom DELVIN LS-414 — Meeting Tables', caption: 'DELVIN LS-414', category: 'tables' },
  { src: 'https://www.furniconcepts.com/images/leadcom/products/718D-2.jpg', alt: 'Leadcom VERANO LS-418D — Meeting Tables', caption: 'VERANO LS-418D', category: 'tables' },
  { src: 'https://www.furniconcepts.com/images/leadcom/products/Colinmeeting-room-table-lifan-furniture-1.jpg', alt: 'Leadcom COLIN LS-701 — Meeting Tables', caption: 'COLIN LS-701', category: 'tables' },
  { src: 'https://www.furniconcepts.com/images/leadcom/products/Landen-meeting-room-table-lifan-furniture-2.jpg', alt: 'Leadcom LANDEN LS-702 — Meeting Tables', caption: 'LANDEN LS-702', category: 'tables' },
  { src: 'https://www.furniconcepts.com/images/leadcom/products/Palermo-5.jpg', alt: 'Leadcom PALERMO LS-4-8A — Meeting Tables', caption: 'PALERMO LS-4-8A', category: 'tables' },
  { src: 'https://www.furniconcepts.com/images/leadcom/products/Berlin.jpg', alt: 'Leadcom BERLIN LS-4-2 — Meeting Tables', caption: 'BERLIN LS-4-2', category: 'tables' },
  { src: 'https://www.furniconcepts.com/images/leadcom/products/malco-plus.jpg', alt: 'Leadcom MALCO PLUS LS-4-6A — Meeting Tables', caption: 'MALCO PLUS LS-4-6A', category: 'tables' },
  { src: 'https://www.furniconcepts.com/images/leadcom/products/Muller-1.jpg', alt: 'Leadcom MULLER LS-4-3 — Meeting Tables', caption: 'MULLER LS-4-3', category: 'tables' },
  { src: 'https://www.furniconcepts.com/images/leadcom/products/548-0.jpg', alt: 'Leadcom OWEN LS-548A — Office & Workstation Furniture', caption: 'OWEN LS-548A', category: 'office' },
  { src: 'https://www.furniconcepts.com/images/leadcom/products/lifan-furniture-office-chair-6.jpg', alt: 'Leadcom BAYLOR LS-546A — Office & Workstation Furniture', caption: 'BAYLOR LS-546A', category: 'office' },
  { src: 'https://www.furniconcepts.com/images/leadcom/products/lifan-furniture-office-chair-547.jpg', alt: 'Leadcom ODYSSEY LS-547A — Office & Workstation Furniture', caption: 'ODYSSEY LS-547A', category: 'office' },
  { src: 'https://www.furniconcepts.com/images/leadcom/products/lifan-furniture-office-chair-1-2.jpg', alt: 'Leadcom RIO LS-5608 — Office & Workstation Furniture', caption: 'RIO LS-5608', category: 'office' },
  { src: 'https://www.furniconcepts.com/images/leadcom/products/lifan-furniture-office-chair.jpg', alt: 'Leadcom AUSTIN LS-542 — Office & Workstation Furniture', caption: 'AUSTIN LS-542', category: 'office' },
  { src: 'https://www.furniconcepts.com/images/leadcom/products/lifan-furniture-office-chair-543.jpg', alt: 'Leadcom Austin Task LS-543 — Office & Workstation Furniture', caption: 'Austin Task LS-543', category: 'office' },
  { src: 'https://www.furniconcepts.com/images/leadcom/products/718-workstation.jpg', alt: 'Leadcom ODEON — Office & Workstation Furniture', caption: 'ODEON', category: 'office' },
  { src: 'https://www.furniconcepts.com/images/leadcom/products/round-4.jpg', alt: 'Leadcom HARRIS 90° — Office & Workstation Furniture', caption: 'HARRIS 90°', category: 'office' },
  { src: 'https://www.furniconcepts.com/images/leadcom/products/Harris-office-workstation-lifan-furniture-11.jpg', alt: 'Leadcom HARRIS 180° — Office & Workstation Furniture', caption: 'HARRIS 180°', category: 'office' },
  { src: 'https://www.furniconcepts.com/images/leadcom/products/Apollo-office-workstation-lifan-furniture-4.jpg', alt: 'Leadcom APOLLO 90° — Office & Workstation Furniture', caption: 'APOLLO 90°', category: 'office' },
  { src: 'https://www.furniconcepts.com/images/leadcom/products/Apollo-3.jpg', alt: 'Leadcom APOLLO 120° — Office & Workstation Furniture', caption: 'APOLLO 120°', category: 'office' },
  { src: 'https://www.furniconcepts.com/images/leadcom/products/Apollo-office-workstation-lifan-furniture-2.jpg', alt: 'Leadcom APOLLO 180° — Office & Workstation Furniture', caption: 'APOLLO 180°', category: 'office' },
  { src: 'https://www.furniconcepts.com/images/leadcom/products/718D-7.jpg', alt: 'Leadcom VERANO — Office & Workstation Furniture', caption: 'VERANO', category: 'office' },
  { src: 'https://www.furniconcepts.com/images/leadcom/products/Harris-office-workstation-lifan-furniture-7.jpg', alt: 'Leadcom HARRIS Executive Workstation — Office & Workstation Furniture', caption: 'HARRIS Executive Workstation', category: 'office' },
  { src: 'https://www.furniconcepts.com/images/leadcom/products/718-0.jpg', alt: 'Leadcom ODEON Executive Workstation — Office & Workstation Furniture', caption: 'ODEON Executive Workstation', category: 'office' },
  { src: 'https://www.furniconcepts.com/images/leadcom/products/718D-workstation.jpg', alt: 'Leadcom VERANO Executive Workstation — Office & Workstation Furniture', caption: 'VERANO Executive Workstation', category: 'office' },
  { src: 'https://www.furniconcepts.com/images/leadcom/products/Apollo-office-workstation-lifan-furniture-5.jpg', alt: 'Leadcom APOLLO Executive Workstation — Office & Workstation Furniture', caption: 'APOLLO Executive Workstation', category: 'office' },
  { src: 'https://www.furniconcepts.com/images/leadcom/products/Delvin-4.jpg', alt: 'Leadcom DELVIN Executive Workstation — Office & Workstation Furniture', caption: 'DELVIN Executive Workstation', category: 'office' },
  { src: 'https://www.furniconcepts.com/images/leadcom/products/Boston-4.jpg', alt: 'Leadcom BOSTON office workstation 120° — Office & Workstation Furniture', caption: 'BOSTON office workstation 120°', category: 'office' },
  { src: 'https://www.furniconcepts.com/images/leadcom/products/w02-bench-seating-8.jpg', alt: 'Leadcom ACE Signature L-W02-1 — Airport & Lounge Seating', caption: 'ACE Signature L-W02-1', category: 'airport' },
  { src: 'https://www.furniconcepts.com/images/leadcom/products/ACE-Elite-w2-2-1.jpg', alt: 'Leadcom ACE Elite L-W02-2 — Airport & Lounge Seating', caption: 'ACE Elite L-W02-2', category: 'airport' },
  { src: 'https://www.furniconcepts.com/images/leadcom/products/w01-bench-seating-1.jpg', alt: 'Leadcom TAB L-W01 — Airport & Lounge Seating', caption: 'TAB L-W01', category: 'airport' },
  { src: 'https://www.furniconcepts.com/images/leadcom/products/airport-lounge-seating-533Y-1.jpg', alt: 'Leadcom APEX LS-533Y — Airport & Lounge Seating', caption: 'APEX LS-533Y', category: 'airport' },
  { src: 'https://www.furniconcepts.com/images/leadcom/products/WAITING-SEATING-535Y.jpg', alt: 'Leadcom FERMA PU LS-535Y — Airport & Lounge Seating', caption: 'FERMA PU LS-535Y', category: 'airport' },
  { src: 'https://www.furniconcepts.com/images/leadcom/products/535XB-1.jpg', alt: 'Leadcom FERMA UPHOLSTERY LS-535XB — Airport & Lounge Seating', caption: 'FERMA UPHOLSTERY LS-535XB', category: 'airport' },
  { src: 'https://www.furniconcepts.com/images/leadcom/products/535X-1.jpg', alt: 'Leadcom FERMA STEEL LS-535X — Airport & Lounge Seating', caption: 'FERMA STEEL LS-535X', category: 'airport' },
  { src: 'https://www.furniconcepts.com/images/leadcom/products/waiting-area-seating-529YF.jpg', alt: 'Leadcom INFINITE LS-529YF — Airport & Lounge Seating', caption: 'INFINITE LS-529YF', category: 'airport' },
  { src: 'https://www.furniconcepts.com/images/leadcom/products/airport-bench-529MF-1.jpg', alt: 'Leadcom Iinfinite Wood LS-529MF — Airport & Lounge Seating', caption: 'Iinfinite Wood LS-529MF', category: 'airport' },
  { src: 'https://www.furniconcepts.com/images/leadcom/products/501-airport-seating-1.jpg', alt: 'Leadcom LUCCA LS-501 — Airport & Lounge Seating', caption: 'LUCCA LS-501', category: 'airport' },
  { src: 'https://www.furniconcepts.com/images/leadcom/products/leadcom-waiting-area-seating-502-1-1.jpg', alt: 'Leadcom CARTER LS-502 — Airport & Lounge Seating', caption: 'CARTER LS-502', category: 'airport' },
  { src: 'https://www.furniconcepts.com/images/leadcom/products/530-1.jpg', alt: 'Leadcom VENDRES LS-530 — Airport & Lounge Seating', caption: 'VENDRES LS-530', category: 'airport' },
  { src: 'https://www.furniconcepts.com/images/leadcom/products/tate-LS-855-1.jpg', alt: 'Leadcom TATE LS-855 — Airport & Lounge Seating', caption: 'TATE LS-855', category: 'airport' },
  { src: 'https://www.furniconcepts.com/images/leadcom/products/2_1_120546_w5c4ohgcrv.jpg', alt: 'Leadcom ACOUSTIC PREMIUM CABIN — Acoustic Pods & Cabins', caption: 'ACOUSTIC PREMIUM CABIN', category: 'acoustic' },
  { src: 'https://www.furniconcepts.com/images/leadcom/products/2_1_120550_f3v9xyjjql.jpg', alt: 'Leadcom ACOUSTIC STANDARD CABIN — Acoustic Pods & Cabins', caption: 'ACOUSTIC STANDARD CABIN', category: 'acoustic' },
  { src: 'https://www.furniconcepts.com/images/leadcom/products/2_1_120552_yguyglgw82.jpg', alt: 'Leadcom ACOUSTIC MOBILE CABIN — Acoustic Pods & Cabins', caption: 'ACOUSTIC MOBILE CABIN', category: 'acoustic' },
  { src: 'https://www.furniconcepts.com/images/leadcom/products/2_1_120554_8crayyrfex.jpg', alt: 'Leadcom ACOUSTIC POD SMALL — Acoustic Pods & Cabins', caption: 'ACOUSTIC POD SMALL', category: 'acoustic' },
  { src: 'https://www.furniconcepts.com/images/leadcom/products/2_1_120553_zj3ls1nasf.jpg', alt: 'Leadcom ACOUSTIC POD TALL — Acoustic Pods & Cabins', caption: 'ACOUSTIC POD TALL', category: 'acoustic' },
  { src: 'https://www.furniconcepts.com/images/leadcom/products/moby-ls-781-2.jpg', alt: 'Leadcom Moby LS-781 — Height-Adjustable Desks', caption: 'Moby LS-781', category: 'desks' },
  { src: 'https://www.furniconcepts.com/images/leadcom/products/office-furniture-ls-782-7.jpg', alt: 'Leadcom Juno LS-782 — Height-Adjustable Desks', caption: 'Juno LS-782', category: 'desks' },
  { src: 'https://www.furniconcepts.com/images/leadcom/products/moby-783-5.jpg', alt: 'Leadcom Moby LS-783 — Height-Adjustable Desks', caption: 'Moby LS-783', category: 'desks' },
  { src: 'https://www.furniconcepts.com/images/leadcom/products/QF60.jpg', alt: 'Leadcom DIEGO QF60 — Height-Adjustable Desks', caption: 'DIEGO QF60', category: 'desks' },
  { src: 'https://www.furniconcepts.com/images/leadcom/products/lifan-furniture-accessory-Z-5.jpg', alt: 'Leadcom CPU Holder Z-5 — Accessories', caption: 'CPU Holder Z-5', category: 'accessories' },
  { src: 'https://www.furniconcepts.com/images/leadcom/products/lifan-furniture-accessory-Z-14.jpg', alt: 'Leadcom CPU Holder Z-14 — Accessories', caption: 'CPU Holder Z-14', category: 'accessories' },
  { src: 'https://www.furniconcepts.com/images/leadcom/products/lifan-furniture-accessory-Z-1.jpg', alt: 'Leadcom CPU Holder Z-1 — Accessories', caption: 'CPU Holder Z-1', category: 'accessories' },
  { src: 'https://www.furniconcepts.com/images/leadcom/products/lifan-furniture-accessory-Z-2.jpg', alt: 'Leadcom CPU Holder Z-2 — Accessories', caption: 'CPU Holder Z-2', category: 'accessories' },
  { src: 'https://www.furniconcepts.com/images/leadcom/products/Mornitor-arms-LS-905.jpg', alt: 'Leadcom Monitor Arm LS-905 — Accessories', caption: 'Monitor Arm LS-905', category: 'accessories' },
  { src: 'https://www.furniconcepts.com/images/leadcom/products/Mornitor-arms-LS-906.jpg', alt: 'Leadcom Monitor Arm LS-906 — Accessories', caption: 'Monitor Arm LS-906', category: 'accessories' },
  { src: 'https://www.furniconcepts.com/images/leadcom/products/lifan-furniture-accessory-k2.jpg', alt: 'Leadcom Keyboard Tray K-2 — Accessories', caption: 'Keyboard Tray K-2', category: 'accessories' },
  { src: 'https://www.furniconcepts.com/images/leadcom/products/lifan-furniture-accessory-k1.jpg', alt: 'Leadcom Keyboard Tray K-1 — Accessories', caption: 'Keyboard Tray K-1', category: 'accessories' },
  { src: 'https://www.furniconcepts.com/images/leadcom/products/lifan-furniture-accessory-k10.jpg', alt: 'Leadcom Keyboard Tray K10 — Accessories', caption: 'Keyboard Tray K10', category: 'accessories' },
  { src: 'https://www.furniconcepts.com/images/leadcom/products/lifan-furniture-accessory-kb03.jpg', alt: 'Leadcom Keyboard Tray KB-03 — Accessories', caption: 'Keyboard Tray KB-03', category: 'accessories' },
  { src: 'https://www.furniconcepts.com/images/leadcom/products/lifan-furniture-accessory-kb02-1.jpg', alt: 'Leadcom Keyboard Tray KB-02 — Accessories', caption: 'Keyboard Tray KB-02', category: 'accessories' },
  { src: 'https://www.furniconcepts.com/images/leadcom/products/lifan-furniture-accessory-k9ps.jpg', alt: 'Leadcom Keyboard Tray K-9PS — Accessories', caption: 'Keyboard Tray K-9PS', category: 'accessories' },
]

const galleryCategories = [
  { id: 'auditorium', label: 'Auditorium Seating' },
  { id: 'cinema', label: 'Cinema & VIP Seating' },
  { id: 'education', label: 'Education & Lecture Seating' },
  { id: 'tables', label: 'Meeting Tables' },
  { id: 'office', label: 'Office & Workstation Furniture' },
  { id: 'airport', label: 'Airport & Lounge Seating' },
  { id: 'acoustic', label: 'Acoustic Pods & Cabins' },
  { id: 'desks', label: 'Height-Adjustable Desks' },
  { id: 'accessories', label: 'Accessories' },
]

const docs = [
  { title: 'Cinema Seating Flyer', cover: 'https://www.furniconcepts.com/images/leadcom/image%20(6).png', file: '/images/pdf/leedcom/Cinema_Seating_Flyer_-_Leadcom_Seating_2023_Version.pdf' },
  { title: 'Molio LS-12601 Series Demo', cover: 'https://www.furniconcepts.com/images/leadcom/image%20(7).png', file: '/images/pdf/leedcom/Molio LS-12601 Series Demo - Leadcom Seating - compressed.pdf' },
  { title: 'Stadium & Arena Telescopic Seating Datasheet', cover: 'https://www.furniconcepts.com/images/leadcom/image%20(8).png', file: '/images/pdf/leedcom/Datasheet Stadium and Arena Telescopic Seating.pdf' },
  { title: 'Telescopic Seating Installations', cover: 'https://www.furniconcepts.com/images/leadcom/retactable-image-profile.png', file: '/images/pdf/leedcom/Telescopic Seating installations - Leadcom Seating.pdf' },
  { title: 'Waiting Area Seating Brochure', cover: 'https://www.furniconcepts.com/images/leadcom/image%20(11).png', file: '/images/pdf/leedcom/Waiting_Area_Seating_Brochure_-_Leadcom_Seating_2020_Version.pdf' },
  { title: 'Retractable Seating', cover: 'https://www.furniconcepts.com/images/leadcom/image%20(12).png', file: '/images/pdf/leedcom/Retractable.pdf' },
  { title: 'Auditorium Seating Brochure', cover: 'https://www.furniconcepts.com/images/leadcom/image%20(13).png', file: '/images/pdf/leedcom/Auditorium_Seating_Brochure_-_Leadcom_Seating_2021_Version.pdf' },
  { title: 'Cinema Seating Brochure', cover: 'https://www.furniconcepts.com/images/leadcom/image10.png', file: '/images/pdf/leedcom/Cinema_Seating_Brochure_-_Leadcom_Seating_2022_Version.pdf' },
]

const projects = [
  { src: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1400&q=80', title: 'Multiplex Cinema Complex', location: 'Muscat, Oman', desc: 'Premium recliners and rocker seating across eight screens, fitted with cup holders and aisle lighting for full-house comfort.' },
  { src: 'https://images.unsplash.com/photo-1540317580384-e5d43616b9aa?auto=format&fit=crop&w=1400&q=80', title: 'National Stadium Seating', location: 'Riyadh, KSA', desc: 'High-capacity telescopic and fixed arena seating engineered for safety, weatherproofing and rapid egress.' },
  { src: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=1400&q=80', title: 'International Airport Waiting Areas', location: 'Doha, Qatar', desc: 'Beam-mounted waiting area systems with integrated power, installed across departure lounges and gate holds.' },
]

// Each item here is rendered once as a visible question/answer card and reused, verbatim,
// to build the FAQPage schema below — one canonical answer per fact, not a restated copy.
const qaItems = [
  {
    question: 'Does Leadcom have any completed projects in Oman?',
    answer: 'Yes. Leadcom’s project documentation lists a completed installation at Cheltenham Muscat, Phase 2, Oman (Model LS-20603) — a real, named, verifiable project. GST Concepts supplies and coordinates Leadcom seating for Muscat and the wider Sultanate.',
  },
  {
    question: 'What is Leadcom’s manufacturing background?',
    answer: 'Leadcom Seating is a global manufacturer of public seating systems with more than 28 years in the field, supplying 170+ countries and having installed over 14 million seats and 1.5 million tables worldwide. Production runs across company-owned plants covering 120,000 sqm with capacity for 80,000 seats a month, BIFMA/BSI certified.',
  },
  {
    question: 'Who supplies auditorium seating in Muscat and Oman?',
    answer: 'GST Concepts sells and installs Leadcom auditorium chairs across Muscat and the wider Sultanate — seating built for conference rooms, performance centers, lecture theaters, churches and schools, with a curved backrest and a seat that holds its shape past 100,000 compressions.',
  },
  {
    question: 'Is retractable seating available for venues in Oman?',
    answer: 'Yes. GST Concepts supplies Leadcom’s motorized retractable seating — the same category used in the Cheltenham Muscat project — which collapses up to 50 rows onto the wall by motorized rail so the floor can clear for other uses.',
  },
  {
    question: 'Who is a cinema seating supplier in Oman?',
    answer: 'GST Concepts supplies Leadcom cinema seating from standard multiplex chairs through VIP recliners and boutique cinema seats, built for the daily wear of a cinema project and sourced as one supply relationship rather than two.',
  },
  {
    question: 'Does Leadcom supply office or workstation seating as well as auditorium seating?',
    answer: 'Yes. Leadcom manufactures both auditorium seating and standard office and workstation seating, which matters for Oman corporate fit-outs that need an auditorium or town hall and everyday office seating from a single source.',
  },
]

export default function Leadcom() {
  useEffect(() => {
    const previousTitle = document.title
    const metaDescription = document.querySelector('meta[name="description"]')
    const previousDescription = metaDescription?.getAttribute('content') || ''

    document.title = seoTitle
    if (metaDescription) metaDescription.setAttribute('content', seoDescription)

    const schemaScripts = [
      {
        id: 'leadcom-org-schema',
        content: {
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: 'GST Concepts',
          address: { '@type': 'PostalAddress', addressLocality: 'Muscat', addressCountry: 'Oman' },
          telephone: ['+968 9710 0007', '+968 9806 7601'],
          email: 'sales@gstconcepts.om',
          areaServed: ['Oman'],
        },
      },
      {
        id: 'leadcom-products-schema',
        content: [
          { name: 'Leadcom Auditorium Seating', category: 'Auditorium Seating' },
          { name: 'Leadcom Retractable Seating', category: 'Retractable Seating' },
          { name: 'Leadcom Cinema Seating', category: 'Cinema Seating' },
          { name: 'Leadcom Workstation & Office Seating', category: 'Workstation Supplier' },
        ].map((p) => ({
          '@context': 'https://schema.org',
          '@type': 'Product',
          name: p.name,
          category: p.category,
          brand: { '@type': 'Brand', name: 'Leadcom' },
          seller: { '@type': 'Organization', name: 'GST Concepts' },
          areaServed: 'Oman',
        })),
      },
      {
        id: 'leadcom-faq-schema',
        content: {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: qaItems.map((item) => ({
            '@type': 'Question',
            name: item.question,
            acceptedAnswer: { '@type': 'Answer', text: item.answer },
          })),
        },
      },
      {
        id: 'leadcom-breadcrumb-schema',
        content: {
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: `${window.location.origin}/` },
            { '@type': 'ListItem', position: 2, name: 'Partners', item: `${window.location.origin}/partners` },
            { '@type': 'ListItem', position: 3, name: 'Leadcom', item: `${window.location.origin}/leadcom` },
          ],
        },
      },
    ]

    schemaScripts.forEach(({ id, content }) => {
      document.getElementById(id)?.remove()
      const script = document.createElement('script')
      script.type = 'application/ld+json'
      script.id = id
      script.text = JSON.stringify(content)
      document.head.appendChild(script)
    })

    return () => {
      document.title = previousTitle
      if (metaDescription) metaDescription.setAttribute('content', previousDescription)
      schemaScripts.forEach(({ id }) => document.getElementById(id)?.remove())
    }
  }, [])

  return (
    <PartnerPage
      hero={{
        bg: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1600&q=80',
        logo: '/images/lead-logo.png',
        title: 'Leadcom Seating in Oman | Auditorium, Retractable & Cinema Seating Supplier, Muscat',
        subtitle: 'Supplied and installed by GST Concepts across Muscat and the wider Sultanate.',
      }}
      breadcrumb={[
        { label: 'Home', href: '/' },
        { label: 'Partners', href: '/partners' },
        { label: 'Leadcom' },
      ]}
      detail={{
        title: 'The Standard of Comfort & Reliability',
        paragraphs: [
          'Leadcom is a leading manufacturer of premium seating solutions for cinemas, auditoriums, airports, and sports venues. Their commitment to innovation and manufacturing excellence makes them the choice for major projects worldwide.',
        ],
        media: <img src="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=800&q=80" alt="Leadcom Cinema Seating" />,
      }}
      galleryTitle="LEADCOM COLLECTION"
      galleryItems={gallery}
      galleryCategories={galleryCategories}
      projects={{ title: 'LEADCOM PROJECTS', items: projects }}
      brochure={
        <>
          <div className="brochure-card">
            <div className="brochure-copy">
              <h2>Leadcom Profiles</h2>
              <p>Browse every Leadcom profile and brochure below. Click any profile card or the View Profile button to open the PDF directly.</p>
            </div>
            <div className="brochure-actions">
              <a href={docs[0].file} className="cta-btn" target="_blank" rel="noopener">View Profiles</a>
            </div>
          </div>
          <div className="brochure-doc-gallery">
            {docs.map((d) => (
              <article className="profile-doc-card" key={d.title}>
                <a href={d.file} className="profile-doc-preview" target="_blank" rel="noopener" aria-label={`Open ${d.title}`}>
                  <img src={d.cover} alt={d.title} loading="lazy" />
                  <span className="profile-doc-badge">PDF</span>
                </a>
                <div className="profile-doc-copy">
                  <h3>{d.title}</h3>
                  <div className="profile-doc-actions">
                    <a href={d.file} className="brochure-doc-item" target="_blank" rel="noopener">View Profile</a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </>
      }
      cta={{
        title: 'Planning An Auditorium, Cinema, Or Retractable Seating Project In Oman?',
        body: 'Talk to GST Concepts about Leadcom seating for your venue.',
        linkLabel: 'Contact GST Concepts',
        linkTo: '/contact',
      }}
      faq={{
        title: 'Leadcom Seating, Answered',
        description: 'What GST Concepts supplies and installs for auditorium, retractable, cinema and workstation seating projects in Oman.',
        items: qaItems,
      }}
    />
  )
}
