export interface Information {
    totalInformation: Number;
    availableInformations: Number;
    bookedInformation: Number;
}

export interface InformationList {
    infoType: String;
    ammenities: String;
    price: number;
    image: string;
    checkInTime: Date;
    checkOutTime: Date;
}