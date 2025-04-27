const router = require('express').Router();
const Order = require('../models/Order');

router.get('/stats', async (req, res) => {
  try {
    const [totalSales, activeUsers, pendingOrders] = await Promise.all([
      Order.aggregate([
        { $match: { status: 'completed' } },
        { $group: { _id: null, total: { $sum: '$amount' } } }
      ]),
      User.countDocuments({ status: 'active' }),
      Order.countDocuments({ status: 'pending' })
    ]);

    res.json({
      totalSales: totalSales[0]?.total || 0,
      activeUsers,
      pendingOrders
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Sales trend data
router.get('/sales-trend', async (req, res) => {
  try {
    const salesData = await Order.aggregate([
      { $match: { status: 'completed' } },
      { $group: {
        _id: { $dateToString: { format: '%Y-%m-%d', date: '$createdAt' } },
        totalSales: { $sum: '$amount' }
      }},
      { $sort: { _id: 1 } },
      { $project: { date: '$_id', sales: '$totalSales', _id: 0 } }
    ]);
    
    res.json(salesData);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
module.exports = router;