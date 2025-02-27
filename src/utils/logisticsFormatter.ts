export function formatLogisticsInfo(logisticsCustomFields: any[]): string {
  if (!logisticsCustomFields || !logisticsCustomFields.length) return '';
  
  const keyMap = {
    Schedule: 'schedule',
    'Estimated Vehicle': 'estimatedVehicle',
    Room: 'room',
    'Meal Provided': 'mealProvided',
    'On-Site Contact Name': 'onSiteContactName',
    'On-site Contact Number': 'onSiteContactNumber',
    'Parking Details': 'parkingDetails',
    'Additional Info': 'additionalInfo',
    'OneDrive Folder': 'oneDriveFolder'
  };

  const info = logisticsCustomFields.reduce((acc, field) => {
    let value = field.storedValue;
    if (field.dataType === 'option-list' && field.referencedObject) {
      value = field.referencedObject.name;
    }
    const key = keyMap[field.caption] || field.caption.replace(/\s+/g, '');
    acc[key] = value || 'Not provided';
    return acc;
  }, {});

  return `Logistics Info

Schedule
${info.schedule}

Vehicles
${info.estimatedVehicle}

OneDrive Link
${info.oneDriveFolder}

Event Info
${info.additionalInfo}

Room
${info.room}

Meal Provided
${info.mealProvided}

On-Site Contact
${info.onSiteContactName} Phone: ${info.onSiteContactNumber}

Parking Details
${info.parkingDetails}

Disclaimer
End times are not definite and are subject to change.`;
} 