export interface Information {
    totalInformation: Number;
    availableInformations: Number;
    bookedInformation: Number;
}

export interface InformationList {
    infoNumber: Number;
    infoType: String;
    ammenities: String;
    price: number;
    image: string;
    checkInTime: Date;
    checkOutTime: Date;
    infoRate: Number;
}

export interface BasicId {
    demoNumber: Number;
}