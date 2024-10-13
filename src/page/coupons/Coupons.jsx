import React, { useState } from 'react';
import MainTitle from "../../components/smallcomponents/MainTitle";
import CoupnsFooter from "./components/CoupnsFooter";
import CouponsTable from "./components/CouponsTable";

function Coupons() {
  const [isAdding, setIsAdding] = useState(false);
  const [coupons, setCoupons] = useState([
    {
      id: 1,
      title: "FREEBIE20",
      discount: "20%",
      description: "Nulla commodo, mi a blandit facilisis, nibh sapien molestie felis, a vulputate orci enim a tellus. Integer ante arcu, rhoncus ac...",
      date: "02/10/2023",
      time: "at 02:30 am"
    },
    {
      id: 2,
      title: "NEWDEAL15",
      discount: "15%",
      description: "Curabitur ornare malesuada velit et facilisis!!!",
      date: "02/08/2023",
      time: "at 10:30 am"
    },
    {
      id: 3,
      title: "EXTRA10",
      discount: "10%",
      description: "Blandit facilisis, nibh sapien molestie felis, a vulputate orci enim a tellus. Integer ante arcu, rhoncus ac...",
      date: "02/04/2023",
      time: "at 03:30 pm"
    },
    {
      id: 4,
      title: "Code",
      discount: "5%",
      description: "Offer description",
      date: "02/03/2023",
      time: "at 02:30 am"
    }
  ]);
  const [newCoupon, setNewCoupon] = useState({
    title: '',
    discount: '',
    description: '',
    date: '',
    time: ''
  });
  const [selectedCoupons, setSelectedCoupons] = useState([]);

  const handleAddClick = () => {
    setIsAdding(true);
  };

  const handleCancel = () => {
    setIsAdding(false);
    setNewCoupon({ title: '', description: '', date: '', time: '' });
  };

  const handleSave = () => {
    setCoupons(prev => [{ id: Date.now(), ...newCoupon }, ...prev]);
    setIsAdding(false);
    setNewCoupon({ title: '', description: '', date: '', time: '' });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewCoupon(prev => ({
      ...prev,
      [name]: name === 'title' ? value.toUpperCase() : value
    }));
  };

  const handleSelectCoupon = (id) => {
    setSelectedCoupons(prev => 
      prev.includes(id) ? prev.filter(couponId => couponId !== id) : [...prev, id]
    );
  };

  const handleDeleteSelected = () => {
    setCoupons(prev => prev.filter(coupon => !selectedCoupons.includes(coupon.id)));
    setSelectedCoupons([]);
  };

  return (
    <main className="coupons">
      <MainTitle>Coupons</MainTitle>
      <div className="main-body coupons__body">
        <CouponsTable 
          isAdding={isAdding}
          coupons={coupons}
          newCoupon={newCoupon}
          onAddClick={handleAddClick}
          onInputChange={handleInputChange}
          selectedCoupons={selectedCoupons}
          onSelectCoupon={handleSelectCoupon}
        />
        <CoupnsFooter 
          onCancel={handleCancel} 
          onSave={handleSave} 
          onDelete={handleDeleteSelected}
          isAdding={isAdding}
          selectedCount={selectedCoupons.length}
        />
      </div>
    </main>
  );
}

export default Coupons;
