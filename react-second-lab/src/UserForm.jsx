import { useState, useEffect } from 'react';

const UserForm = () => {
  const [formData, setFormData] = useState(() => {
    const savedData = localStorage.getItem('user_data');
    return savedData ? JSON.parse(savedData) : {
      firstName: '',
      lastName: '',
      groupCode: '',
      email: ''
    };
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSave = (e) => {
    e.preventDefault(); 
    localStorage.setItem('user_data', JSON.stringify(formData));
    alert('Дані успішно збережено!');
  };

  const handleClear = () => {
    localStorage.removeItem('user_data');
    setFormData({
      firstName: '',
      lastName: '',
      groupCode: '',
      email: ''
    });
  };

  return (
    <div style={{ padding: '20px', maxWidth: '400px', fontFamily: 'sans-serif' }}>
      <h2>Реєстрація користувача</h2>
      
      <form style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <input
          type="text"
          name="firstName"
          placeholder="Ім'я"
          value={formData.firstName}
          onChange={handleChange}
        />
        <input
          type="text"
          name="lastName"
          placeholder="Прізвище"
          value={formData.lastName}
          onChange={handleChange}
        />
        <input
          type="text"
          name="groupCode"
          placeholder="Код групи"
          value={formData.groupCode}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Електронна пошта"
          value={formData.email}
          onChange={handleChange}
        />
        
        <div style={{ marginTop: '10px', display: 'flex', gap: '10px' }}>
          <button 
            type="button" 
            onClick={handleSave}
            style={{ padding: '8px', cursor: 'pointer', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '4px' }}
          >
            Зберегти дані
          </button>
          
          <button 
            type="button" 
            onClick={handleClear}
            style={{ padding: '8px', cursor: 'pointer', backgroundColor: '#f44336', color: 'white', border: 'none', borderRadius: '4px' }}
          >
            Очистити
          </button>
        </div>
      </form>

      <hr style={{ margin: '20px 0' }} />

      <h3>Відображення даних:</h3>
      <div style={{ backgroundColor: '#f9f9f9', padding: '10px', borderRadius: '5px', border: '1px solid #ddd' }}>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li><strong>Ім'я:</strong> {formData.firstName || '—'}</li>
          <li><strong>Прізвище:</strong> {formData.lastName || '—'}</li>
          <li><strong>Код групи:</strong> {formData.groupCode || '—'}</li>
          <li><strong>Email:</strong> {formData.email || '—'}</li>
        </ul>
      </div>
    </div>
  );
};

export default UserForm;