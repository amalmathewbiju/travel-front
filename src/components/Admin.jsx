import React, { useState, useEffect } from 'react';
import { TextField, Button, Box, Typography, Select, MenuItem, FormControl, InputLabel, IconButton } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import axios from 'axios';

const Admin = () => {
  // Place Form Data State
  const [placeFormData, setPlaceFormData] = useState({
      name: '',
      description: '',
      imageUrl: '',
      famousPlaces: [{ name: '', description: '', images: [''] }],
      culturalAttractions: [{ name: '', description: '', images: [''] }],
      mustExplore: [{ name: '', description: '', images: [''] }]
  });

  // Hotel Form Data State
  const [hotelFormData, setHotelFormData] = useState({
    name: '',
    description: '',
    imageUrl: '',
    placeId: '',
    pricePerNight: '',
    amenities: '',
    availability: true,
    rooms: [{ type: '', capacity: '', features: '', images: [''] }],
    surroundings: [{ name: '', description: '', distance: '', images: [''] }]
});

const [editMode, setEditMode] = useState(false);
const [selectedItem, setSelectedItem] = useState(null);
const [hotels, setHotels] = useState([]);

useEffect(() => {
    fetchHotels();
}, []);

const fetchHotels = async () => {
    try {
        const response = await axios.get('http://localhost:3000/hotels');
        setHotels(response.data);
    } catch (error) {
        console.error('Error fetching hotels:', error);
    }
};


  const [places, setPlaces] = useState([]);

  useEffect(() => {
    fetchPlaces();
}, []);

const fetchPlaces = async () => {
    try {
        const response = await axios.get('http://localhost:3000/places');
        setPlaces(response.data);
    } catch (error) {
        console.error('Error fetching places:', error);
    }
};

  // Place Form Handlers
  const handleFeatureChange = (category, index, field, value, imageIndex = null) => {
    const updatedData = { ...placeFormData };
    if (imageIndex !== null) {
      updatedData[category][index].images[imageIndex] = value;
    } else {
      updatedData[category][index][field] = value;
    }
    setPlaceFormData(updatedData);
  };

  const addFeature = (category) => {
    setPlaceFormData({
      ...placeFormData,
      [category]: [...placeFormData[category], { name: '', description: '', images: [''] }]
    });
  };

  // Place handlers
const handleEditPlace = async (placeId) => {
  try {
      const response = await axios.get(`http://localhost:3000/places/${placeId}`);
      setPlaceFormData(response.data);
      setEditMode(true);
      setSelectedItem(placeId);
  } catch (error) {
      console.error('Error fetching place:', error);
  }
};

const handleUpdatePlace = () => {
  const placeData = {
      name: placeFormData.name,
      description: placeFormData.description,
      imageUrl: placeFormData.imageUrl,
      famousPlaces: placeFormData.famousPlaces,
      culturalAttractions: placeFormData.culturalAttractions,
      mustExplore: placeFormData.mustExplore
  };

  axios.put(`http://localhost:3000/places/${selectedItem}`, placeData)
      .then(response => {
          alert('Place updated successfully!');
          setEditMode(false);
          setSelectedItem(null);
          fetchPlaces();
          setPlaceFormData({
              name: '',
              description: '',
              imageUrl: '',
              famousPlaces: [{ name: '', description: '', images: [''] }],
              culturalAttractions: [{ name: '', description: '', images: [''] }],
              mustExplore: [{ name: '', description: '', images: [''] }]
          });
      })
      .catch(error => {
          console.error('Error updating place:', error);
          alert('Failed to update place');
      });
};

const handleDeletePlace = async (placeId) => {
  if (window.confirm('Are you sure you want to delete this place?')) {
      try {
          await axios.delete(`http://localhost:3000/places/${placeId}`);
          alert('Place deleted successfully!');
          fetchPlaces();
      } catch (error) {
          console.error('Error deleting place:', error);
      }
  }
};

// Hotel handlers
const handleEditHotel = async (hotelId) => {
  try {
      const response = await axios.get(`http://localhost:3000/hotels/${hotelId}`);
      const hotelData = response.data;
      
      // Format the data for form fields
      setHotelFormData({
          ...hotelData,
          amenities: Array.isArray(hotelData.amenities) 
              ? hotelData.amenities.join(', ') 
              : hotelData.amenities,
          rooms: hotelData.rooms.map(room => ({
              ...room,
              features: Array.isArray(room.features) 
                  ? room.features.join(', ') 
                  : room.features
          }))
      });
      
      setEditMode(true);
      setSelectedItem(hotelId);
  } catch (error) {
      console.error('Error fetching hotel:', error);
  }
};

const resetHotelForm = () => {
  setHotelFormData({
      name: '',
      description: '',
      imageUrl: '',
      placeId: '',
      pricePerNight: '',
      amenities: '',
      availability: true,
      rooms: [{ type: '', capacity: '', features: '', images: [''] }],
      surroundings: [{ name: '', description: '', distance: '', images: [''] }]
  });
};
const handleUpdateHotel = async () => {
  try {
      await axios.put(`http://localhost:3000/hotels/${selectedItem}`, hotelFormData);
      alert('Hotel updated successfully!');
      setEditMode(false);
      setSelectedItem(null);
      fetchHotels();
      resetHotelForm();
  } catch (error) {
      console.error('Error updating hotel:', error);
  }
};

const handleDeleteHotel = async (hotelId) => {
  if (window.confirm('Are you sure you want to delete this hotel?')) {
      try {
          await axios.delete(`http://localhost:3000/hotels/${hotelId}`);
          alert('Hotel deleted successfully!');
      } catch (error) {
          console.error('Error deleting hotel:', error);
      }
  }
};
const resetPlaceForm = () => {
  setPlaceFormData({
      name: '',
      description: '',
      imageUrl: '',
      famousPlaces: [{ name: '', description: '', images: [''] }],
      culturalAttractions: [{ name: '', description: '', images: [''] }],
      mustExplore: [{ name: '', description: '', images: [''] }]
  });
};

  const addImage = (category, featureIndex) => {
    const updatedData = { ...placeFormData };
    updatedData[category][featureIndex].images.push('');
    setPlaceFormData(updatedData);
  };

  const removeFeature = (category, index) => {
    const updatedData = { ...placeFormData };
    updatedData[category].splice(index, 1);
    setPlaceFormData(updatedData);
  };

  const removeImage = (category, featureIndex, imageIndex) => {
    const updatedData = { ...placeFormData };
    updatedData[category][featureIndex].images.splice(imageIndex, 1);
    setPlaceFormData(updatedData);
  };

  const handlePlaceSubmit = () => {
    const placeData = {
        name: placeFormData.name,
        description: placeFormData.description,
        imageUrl: placeFormData.imageUrl,
        famousPlaces: placeFormData.famousPlaces.filter(place => 
            place.name && place.description && place.images.some(img => img.trim() !== '')
        ),
        culturalAttractions: placeFormData.culturalAttractions.filter(attr => 
            attr.name && attr.description && attr.images.some(img => img.trim() !== '')
        ),
        mustExplore: placeFormData.mustExplore.filter(item => 
            item.name && item.description && item.images.some(img => img.trim() !== '')
        )
    };

    axios.post('http://localhost:3000/places', placeData)
        .then(response => {
            alert('Place added successfully!');
            fetchPlaces();
            setPlaceFormData({
                name: '',
                description: '',
                imageUrl: '',
                famousPlaces: [{ name: '', description: '', images: [''] }],
                culturalAttractions: [{ name: '', description: '', images: [''] }],
                mustExplore: [{ name: '', description: '', images: [''] }]
            });
        })
        .catch(error => {
            console.error('Error adding place:', error);
            alert('Failed to add place');
        });
};

const handleRoomImageChange = (roomIndex, imageIndex, value) => {
  const updatedRooms = [...hotelFormData.rooms];
  updatedRooms[roomIndex].images[imageIndex] = value;
  setHotelFormData({ ...hotelFormData, rooms: updatedRooms });
};

const addRoom = () => {
  setHotelFormData({
    ...hotelFormData,
    rooms: [...hotelFormData.rooms, { type: '', capacity: '', features: '', images: [''] }]
  });
};

const removeRoom = (index) => {
  const updatedRooms = [...hotelFormData.rooms];
  updatedRooms.splice(index, 1);
  setHotelFormData({ ...hotelFormData, rooms: updatedRooms });
};

const addRoomImage = (roomIndex) => {
  const updatedRooms = [...hotelFormData.rooms];
  updatedRooms[roomIndex].images.push('');
  setHotelFormData({ ...hotelFormData, rooms: updatedRooms });
};

const removeRoomImage = (roomIndex, imageIndex) => {
  const updatedRooms = [...hotelFormData.rooms];
  updatedRooms[roomIndex].images.splice(imageIndex, 1);
  setHotelFormData({ ...hotelFormData, rooms: updatedRooms });
};

const handleSurroundingChange = (index, field, value) => {
  const updatedSurroundings = [...hotelFormData.surroundings];
  updatedSurroundings[index][field] = value;
  setHotelFormData({ ...hotelFormData, surroundings: updatedSurroundings });
};

const handleRoomChange = (index, field, value) => {
  const updatedRooms = [...hotelFormData.rooms];
  updatedRooms[index][field] = value;
  setHotelFormData({ ...hotelFormData, rooms: updatedRooms });
};
const handleSurroundingImageChange = (surroundingIndex, imageIndex, value) => {
  const updatedSurroundings = [...hotelFormData.surroundings];
  updatedSurroundings[surroundingIndex].images[imageIndex] = value;
  setHotelFormData({ ...hotelFormData, surroundings: updatedSurroundings });
};

const addSurrounding = () => {
  setHotelFormData({
    ...hotelFormData,
    surroundings: [...hotelFormData.surroundings, { name: '', description: '', distance: '', images: [''] }]
  });
};

const removeSurrounding = (index) => {
  const updatedSurroundings = [...hotelFormData.surroundings];
  updatedSurroundings.splice(index, 1);
  setHotelFormData({ ...hotelFormData, surroundings: updatedSurroundings });
};

const addSurroundingImage = (surroundingIndex) => {
  const updatedSurroundings = [...hotelFormData.surroundings];
  updatedSurroundings[surroundingIndex].images.push('');
  setHotelFormData({ ...hotelFormData, surroundings: updatedSurroundings });
};

const removeSurroundingImage = (surroundingIndex, imageIndex) => {
  const updatedSurroundings = [...hotelFormData.surroundings];
  updatedSurroundings[surroundingIndex].images.splice(imageIndex, 1);
  setHotelFormData({ ...hotelFormData, surroundings: updatedSurroundings });
};

  
  

  // Hotel Form Handlers
  const handleHotelChange = (e) => {
    const { name, value } = e.target;
    setHotelFormData({ ...hotelFormData, [name]: value });
  };

  const handleHotelSubmit = () => {
    const hotelData = {
        name: hotelFormData.name,
        description: hotelFormData.description,
        imageUrl: hotelFormData.imageUrl,
        placeId: hotelFormData.placeId,
        pricePerNight: Number(hotelFormData.pricePerNight),
        availability: Boolean(hotelFormData.availability),
        amenities: hotelFormData.amenities.split(',').map(item => item.trim()).filter(Boolean),
        rooms: hotelFormData.rooms.map(room => ({
            type: room.type,
            capacity: Number(room.capacity),
            features: room.features.split(',').map(f => f.trim()).filter(Boolean),
            images: room.images.filter(img => img.trim() !== '')
        })).filter(room => room.type && room.capacity),
        surroundings: hotelFormData.surroundings.map(surrounding => ({
            name: surrounding.name,
            description: surrounding.description,
            distance: surrounding.distance,
            images: surrounding.images.filter(img => img.trim() !== '')
        })).filter(s => s.name && s.description && s.distance)
    };

    console.log('Sending hotel data:', hotelData);

    axios.post('http://localhost:3000/hotels', hotelData)
        .then(response => {
            console.log('Success:', response.data);
            alert('Hotel added successfully!');
            fetchHotels();
            resetHotelForm();
        })
        .catch(error => {
            console.log('Error details:', error.response?.data);
            alert('Failed to add hotel. Check console for details.');
        });
};




  

  const renderFeatureSection = (category, title) => (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h6">{title}</Typography>
      {placeFormData[category].map((feature, index) => (
        <Box key={index} sx={{ mt: 2, p: 2, border: '1px solid #ddd', borderRadius: 1 }}>
          <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            <IconButton onClick={() => removeFeature(category, index)} color="error">
              <DeleteOutlineIcon />
            </IconButton>
          </Box>
          <TextField
            label="Name"
            value={feature.name}
            onChange={(e) => handleFeatureChange(category, index, 'name', e.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Description"
            value={feature.description}
            onChange={(e) => handleFeatureChange(category, index, 'description', e.target.value)}
            fullWidth
            multiline
            margin="normal"
          />
          {feature.images.map((image, imgIndex) => (
            <Box key={imgIndex} sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
              <TextField
                label={`Image URL ${imgIndex + 1}`}
                value={image}
                onChange={(e) => handleFeatureChange(category, index, 'images', e.target.value, imgIndex)}
                fullWidth
                margin="normal"
              />
              <IconButton onClick={() => removeImage(category, index, imgIndex)} color="error">
                <DeleteOutlineIcon />
              </IconButton>
            </Box>
          ))}
          <Button 
            startIcon={<AddCircleOutlineIcon />}
            onClick={() => addImage(category, index)}
            sx={{ mt: 1 }}
          >
            Add Image
          </Button>
        </Box>
      ))}
      <Button 
        startIcon={<AddCircleOutlineIcon />}
        onClick={() => addFeature(category)}
        sx={{ mt: 2 }}
      >
        Add {title}
      </Button>
    </Box>
  );

  return (
    <Box sx={{ padding: '20px', maxWidth: '800px', margin: 'auto' }}>
      {/* Place Form Section */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h4" gutterBottom>
          Admin: Add Place
        </Typography>
        <form onSubmit={(e) => {
    e.preventDefault();
    editMode ? handleUpdatePlace() : handlePlaceSubmit();
}}>
    <TextField
        name="name"
        label="Place Name"
        value={placeFormData.name}
        onChange={(e) => setPlaceFormData({...placeFormData, name: e.target.value})}
        fullWidth
        required
        margin="normal"
    />
    <TextField
        name="description"
        label="Description"
        value={placeFormData.description}
        onChange={(e) => setPlaceFormData({...placeFormData, description: e.target.value})}
        fullWidth
        required
        margin="normal"
    />
    <TextField
        name="imageUrl"
        label="Main Image URL"
        value={placeFormData.imageUrl}
        onChange={(e) => setPlaceFormData({...placeFormData, imageUrl: e.target.value})}
        fullWidth
        required
        margin="normal"
    />

    {renderFeatureSection('famousPlaces', 'Famous Places')}
    {renderFeatureSection('culturalAttractions', 'Cultural Attractions')}
    {renderFeatureSection('mustExplore', 'Must Explore')}

    <Button 
        type="submit" 
        variant="contained" 
        color="primary" 
        fullWidth 
        sx={{ mt: 3 }}
    >
        {editMode ? 'Update Place' : 'Add Place'}
    </Button>
</form>

      </Box>

      {/* Hotel Form Section */}
      <Box>
        <Typography variant="h4" gutterBottom>
          Admin: Add Hotel
        </Typography>
        <form onSubmit={(e) => {
    e.preventDefault();
    editMode ? handleUpdateHotel() : handleHotelSubmit();
}}>
          <FormControl fullWidth margin="normal">
            <InputLabel>Select Place</InputLabel>
            <Select
              name="placeId"
              value={hotelFormData.placeId}
              onChange={handleHotelChange}
              required
            >
              {places.map((place) => (
                <MenuItem key={place._id} value={place._id}>
                  {place.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl fullWidth margin="normal">
              <InputLabel>Availability</InputLabel>
              <Select
                name="availability"
                value={hotelFormData.availability}
                onChange={handleHotelChange}
                required
              >
                <MenuItem value={true}>Available</MenuItem>
                <MenuItem value={false}>Not Available</MenuItem>
              </Select>
            </FormControl>
                      
          <TextField
            name="name"
            label="Hotel Name"
            value={hotelFormData.name}
            onChange={handleHotelChange}
            fullWidth
            required
            margin="normal"
          />
          <TextField
            name="description"
            label="Description"
            value={hotelFormData.description}
            onChange={handleHotelChange}
            fullWidth
            required
            margin="normal"
          />
          <TextField
            name="imageUrl"
            label="Image URL"
            value={hotelFormData.imageUrl}
            onChange={handleHotelChange}
            fullWidth
            required
            margin="normal"
          />
          <TextField
            name="pricePerNight"
            label="Price Per Night"
            type="number"
            value={hotelFormData.pricePerNight}
            onChange={handleHotelChange}
            fullWidth
            required
            margin="normal"
          />
          <TextField
            name="amenities"
            label="Amenities (comma-separated)"
            value={hotelFormData.amenities}
            onChange={handleHotelChange}
            fullWidth
            required
            margin="normal"
            helperText="Enter amenities separated by commas (e.g., Pool, Wifi, Restaurant)"
          />
          {/* Rooms Section */}
<Typography variant="h6" sx={{ mt: 4 }}>Rooms</Typography>
{hotelFormData.rooms.map((room, roomIndex) => (
  <Box key={roomIndex} sx={{ mt: 2, p: 2, border: '1px solid #ddd', borderRadius: 1 }}>
    <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
      <IconButton onClick={() => removeRoom(roomIndex)} color="error">
        <DeleteOutlineIcon />
      </IconButton>
    </Box>
    
    <TextField
      label="Room Type"
      value={room.type}
      onChange={(e) => handleRoomChange(roomIndex, 'type', e.target.value)}
      fullWidth
      margin="normal"
    />
    
    <TextField
      label="Capacity"
      type="number"
      value={room.capacity}
      onChange={(e) => handleRoomChange(roomIndex, 'capacity', e.target.value)}
      fullWidth
      margin="normal"
    />
    
    <TextField
      label="Features (comma-separated)"
      value={room.features}
      onChange={(e) => handleRoomChange(roomIndex, 'features', e.target.value)}
      fullWidth
      margin="normal"
    />
    
    {room.images.map((image, imgIndex) => (
      <Box key={imgIndex} sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
        <TextField
          label={`Room Image URL ${imgIndex + 1}`}
          value={image}
          onChange={(e) => handleRoomImageChange(roomIndex, imgIndex, e.target.value)}
          fullWidth
          margin="normal"
        />
        <IconButton onClick={() => removeRoomImage(roomIndex, imgIndex)} color="error">
          <DeleteOutlineIcon />
        </IconButton>
      </Box>
    ))}
    
    <Button 
      startIcon={<AddCircleOutlineIcon />}
      onClick={() => addRoomImage(roomIndex)}
      sx={{ mt: 1 }}
    >
      Add Room Image
    </Button>
  </Box>
))}

<Button 
  startIcon={<AddCircleOutlineIcon />}
  onClick={addRoom}
  sx={{ mt: 2 }}
>
  Add Room
</Button>

{/* Surroundings Section */}
<Typography variant="h6" sx={{ mt: 4 }}>Surroundings</Typography>
{hotelFormData.surroundings.map((surrounding, surroundingIndex) => (
  <Box key={surroundingIndex} sx={{ mt: 2, p: 2, border: '1px solid #ddd', borderRadius: 1 }}>
    <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
      <IconButton onClick={() => removeSurrounding(surroundingIndex)} color="error">
        <DeleteOutlineIcon />
      </IconButton>
    </Box>
    
    <TextField
      label="Name"
      value={surrounding.name}
      onChange={(e) => handleSurroundingChange(surroundingIndex, 'name', e.target.value)}
      fullWidth
      margin="normal"
    />
    
    <TextField
      label="Description"
      value={surrounding.description}
      onChange={(e) => handleSurroundingChange(surroundingIndex, 'description', e.target.value)}
      fullWidth
      margin="normal"
    />
    
    <TextField
      label="Distance"
      value={surrounding.distance}
      onChange={(e) => handleSurroundingChange(surroundingIndex, 'distance', e.target.value)}
      fullWidth
      margin="normal"
    />
    
    {surrounding.images.map((image, imgIndex) => (
      <Box key={imgIndex} sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
        <TextField
          label={`Image URL ${imgIndex + 1}`}
          value={image}
          onChange={(e) => handleSurroundingImageChange(surroundingIndex, imgIndex, e.target.value)}
          fullWidth
          margin="normal"
        />
        <IconButton onClick={() => removeSurroundingImage(surroundingIndex, imgIndex)} color="error">
          <DeleteOutlineIcon />
        </IconButton>
      </Box>
    ))}
    
    <Button 
      startIcon={<AddCircleOutlineIcon />}
      onClick={() => addSurroundingImage(surroundingIndex)}
      sx={{ mt: 1 }}
    >
      Add Image
    </Button>
  </Box>
))}

<Button 
  startIcon={<AddCircleOutlineIcon />}
  onClick={addSurrounding}
  sx={{ mt: 2 }}
>
  Add Surrounding
</Button>

<Button 
        type="submit" 
        variant="contained" 
        color="primary" 
        fullWidth 
        sx={{ mt: 2 }}
    >
        {editMode ? 'Update Hotel' : 'Add Hotel'}
    </Button>
</form>
      </Box>
      {/* Display Existing Places */}
<Box sx={{ mt: 4 }}>
    <Typography variant="h5">Existing Places</Typography>
    {places.map((place) => (
        <Box key={place._id} sx={{ mt: 2, p: 2, border: '1px solid #ddd' }}>
            <Typography variant="h6">{place.name}</Typography>
            <Button onClick={() => handleEditPlace(place._id)}>Edit</Button>
            <Button color="error" onClick={() => handleDeletePlace(place._id)}>Delete</Button>
        </Box>
    ))}
</Box>

{/* Display Existing Hotels */}
<Box sx={{ mt: 4 }}>
    <Typography variant="h5">Existing Hotels</Typography>
    {hotels.map((hotel) => (
        <Box key={hotel._id} sx={{ mt: 2, p: 2, border: '1px solid #ddd' }}>
            <Typography variant="h6">{hotel.name}</Typography>
            <Typography variant="subtitle1">Place: {hotel.placeId?.name}</Typography>
            <Typography variant="body2">Price: ₹{hotel.pricePerNight} per night</Typography>
            <Box sx={{ mt: 1 }}>
                <Button onClick={() => handleEditHotel(hotel._id)}>Edit</Button>
                <Button color="error" onClick={() => handleDeleteHotel(hotel._id)}>Delete</Button>
            </Box>
        </Box>
    ))}
</Box>

    </Box>
  );
};

export default Admin;
