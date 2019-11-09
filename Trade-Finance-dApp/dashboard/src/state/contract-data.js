export const userPassword = [["0x27b2f32be5591435c5df926af2bb70a10e43ef61", "123"], ["0xea2810ee8d0f55929bf812cb157a72b5166d891d", "123456"]]

export const BOL = [{
    BOL_num: 29126,
    carrier:"SPL",
    shipper:"HiSilicon", 
    shipper_addr:"Haoshen Road",
    consignee:"Raiffeisen Bank International AG, Vienna Branch",  // consignee is issuing bank
    notify_party:"WeBlockchain Ltd",                              // notify is importer
    notify_party_addr:"Weegbreesingel Road 9",
    goods:"2 crates containing RFID", 
    date_of_isue:"3 Dec 2019"
}, 
{
    BOL_num: 92305,
    carrier:"Maersk",
    shipper:"Wally's Weld Works",
    shipper_addr:"111 Welder Way",
    consignee:"UBS Bank, Virginia Branch",  
    notify_party:"Random Inc. Holdings Pte Ltd",  
    notify_party_addr:"4484 Oakmound Drive",
    goods:"Around 20,000 pieces of Szatan N623424 series", 
    date_of_isue:"14 Mar 2020"
},
{
    BOL_num: 45719,
    carrier:"Evergreen Line",
    shipper:"Bema GMBH", 
    shipper_addr:"86199 Augsburg",
    consignee:"Barclays, Tel Aviv Branch", 
    notify_party:"Accelio Corp",
    notify_party_addr:"Pob 1150 Nazaret Illit Israel 17100",
    goods:"Around 5,000 pieces of Sata N8967678 series", 
    date_of_isue:"17 May 2020"
},
{
    BOL_num: 10295,
    carrier:"The Ocean",
    shipper:"SS Vessel", 
    shipper_addr:"123 Johannesburg",
    consignee:"BNP Paribas, Bangkok Branch",  
    notify_party:"Sulzer Medica Ltd", 
    notify_party_addr:"21 Wattana Bangkok 10110",
    goods:"10 crates containing barcode scanners type Z302594 series", 
    date_of_isue:"9 Sep 2020"
},
{
    BOL_num: 23527,
    carrier:"Cosco Shipping",
    shipper:"Louis Way", 
    shipper_addr:"450 St Louis Boulevard",
    consignee:"Credit Suisse, Havana Branch", 
    notify_party:"Pacific North West Capital Corp.",  
    notify_party_addr:"1850 E. Rodriguez Sr. Ave., Cubao",
    goods:"5 crates containing tobacco", 
    date_of_isue:"13 Nov 2020"
}
];

export const LOC = [{                               // applicant is the importer 
    issuing_bank: "Raiffeisen Bank International AG, Vienna Branch", 
    application_date: "12 Nov 2019",
    applicant: "WeBlockchain Ltd",
    applicant_addr: "Weegbreesingel Road 9",
    beneficiary: "3DLabs Inc. Ltd",                 // beneficiary is the exporter
    beneficiary_addr: "2580 Rhapsody Street",
    expiry_date: "1 Jan 2020",
    presentation_place: "Credit Agricole Corporate and Investment Bank, San Fransisco Branch", 
    price: "750,000",
    transport_deadline: "20 Dec 2019", 
    ship_from: "Vienna",
    ship_to:"US",
    goods: "2 crates containing RFID"
}, 
{
    issuing_bank: "UBS Bank, Virginia Branch", 
    application_date: "5 Jan 2020",
    applicant: "Random Inc. Holdings Pte Ltd",
    applicant_addr: "4484 Oakmound Drive",
    beneficiary: "360Networks Inc.",            
    beneficiary_addr: "Kuzmányho 1191/43, 04001 Staré Mesto",
    expiry_date: "1 Apr 2020",
    presentation_place: "Morgan Stanley, Hiroshima Branch", 
    price: "130,000",
    transport_deadline: "25 Mar 2020", 
    ship_from: "US",
    ship_to:"Japan",
    goods: "Around 20,000 pieces of Szatan N623424 series"    
},
{
    issuing_bank: "Barclays, Tel Aviv Branch", 
    application_date: "8 Apr 2020",
    applicant: "Accelio Corp",
    applicant_addr: "Pob 1150 Nazaret Illit Israel 17100",
    beneficiary: "Methanex Corp",            
    beneficiary_addr: "Ul.tole Bi, bld. 234/Б",
    expiry_date: "1 Jul 2020",
    presentation_place: "Deutsche Bank, Yekaterinburg Branch", 
    price: "550,000",
    transport_deadline: "20 Jun 2020", 
    ship_from: "Israel",
    ship_to:"Russia",
    goods: "Around 5,000 pieces of Sata N8967678 series"    
},
{
    issuing_bank: "BNP Paribas, Bangkok Branch", 
    application_date: "11 Jul 2020",
    applicant: "Sulzer Medica Ltd",
    applicant_addr: "21 Wattana Bangkok 10110",
    beneficiary: "Pacific Century Cyberworks Ltd",            
    beneficiary_addr: "Na Loučkách 1140",
    expiry_date: "1 Oct 2020",
    presentation_place: "Merrill Lynch, Salvador Branch", 
    price: "920,000",
    transport_deadline: "30 Sep 2020", 
    ship_from: "Thailand",
    ship_to:"Brazil",
    goods: "10 crates containing barcode scanners type Z302594 series"    
},
{
    issuing_bank: "Credit Suisse, Havana Branch", 
    application_date: "3 Oct 2020",
    applicant: "Pacific North West Capital Corp.",
    applicant_addr: "1850 E. Rodriguez Sr. Ave., Cubao",
    beneficiary: "Unibanco Holdings S.A.",            
    beneficiary_addr: "Glederudveien 28",
    expiry_date: "1 Dec 2020",
    presentation_place: "Citi Group, Uppsala Branch", 
    price: "340,000",
    transport_deadline: "27 Nov 2020", 
    ship_from: "Cuba",
    ship_to:"Sweden",
    goods: "5 crates containing tobacco"    
}
];

export const BOE = [{                           
    message: "90 DAYS FROM SHIPMENT of this exchange pay to the order of OURSELVES the sum of EURO of SEVEN HUNDRED AND FIFTY THOUSAND POUNDS ONLY. For Value received.",
    price: "750,000",
    receiver: "SG Blockchain Ltd",                  // receiver is the importer
    receiver_addr: "Weegbreesingel Road 9",
    sender: "3DLabs Inc. Ltd",                      // sender is the exporter
    sender_addr: "2580 Rhapsody Street"
},
{
    message: "90 DAYS FROM SHIPMENT of this exchange pay to the order of OURSELVES the sum of EURO of ONE HUNDRED AND THIRTY THOUSAND POUNDS ONLY. For Value received.",
    price: "130,000",
    receiver: "Random Inc. Holdings Pte Ltd",
    receiver_addr: "4484 Oakmound Drive",
    sender: "360Networks Inc.",
    sender_addr: "Kuzmányho 1191/43, 04001 Staré Mesto"
}, 
{
    message: "90 DAYS FROM SHIPMENT of this exchange pay to the order of OURSELVES the sum of EURO of FIVE HUNDRED AND FIFTY THOUSAND POUNDS ONLY. For Value received.",
    price: "550,000",
    receiver: "Accelio Corp",
    receiver_addr: "Pob 1150 Nazaret Illit Israel 17100",
    sender: "Methanex Corp",
    sender_addr: "Ul.tole Bi, bld. 234/Б"
}, 
{
    message: "90 DAYS FROM SHIPMENT of this exchange pay to the order of OURSELVES the sum of EURO of NINE HUNDRED AND TWENTY THOUSAND POUNDS ONLY. For Value received.",
    price: "920,000",
    receiver: "Sulzer Medica Ltd",
    receiver_addr: "21 Wattana Bangkok 10110",
    sender: "Pacific Century Cyberworks Ltd",
    sender_addr: "Na Loučkách 1140"
}, 
{
    message: "90 DAYS FROM SHIPMENT of this exchange pay to the order of OURSELVES the sum of EURO of THREE HUNDRED AND FORTY THOUSAND POUNDS ONLY. For Value received.",
    price: "340,000",
    receiver: "Pacific North West Capital Corp.",
    receiver_addr: "1850 E. Rodriguez Sr. Ave., Cubao",
    sender: "Unibanco Holdings S.A.",
    sender_addr: "Glederudveien 28"
}
];