export class Profile {
    firstName;
    lastName;
    fullName;
    DOB;
    address;
    gender;
    phoneNumber;
    passport;
    note;
    bankAccounts;
    barcode;
    rank;
    avatarUrl;
    clinicId;
    locationId;
    createdAt;
    academicRankIds;
    academicDegreeIds;
    expertise;
    updateddAt;
    isActive;
    isAvailable;
    realm;


    constructor({
        imageURL = '',
        name = '',
        idCode = '',
    } = {}) {
        this.imageURL = imageURL;
        this.name = name;
        this.idCode = idCode;
    }
}