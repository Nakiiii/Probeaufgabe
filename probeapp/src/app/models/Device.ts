export interface Device {

    id: string,
    deviceId: string,
    deviceName: string,
    deviceTypeId: string,
    failsafe: boolean,
    tempMin: number,
    tempMax: number,
    installationPosition: string,
    insertInto19InchCabinet: boolean,
    motionEnable: boolean,
    siplusCatalog: boolean,
    simaticCatalog: boolean,
    rotationAxisNumber: number,
    positionAxisNumber: number,
    terminalElement?: boolean,
    advancedEnvironmentalConditions?: boolean
}