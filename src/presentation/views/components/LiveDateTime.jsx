import { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';
import './LiveDateTime.css';

const LiveDateTime = () => {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
    });
  };

  const formatTime = (date) => {
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true,
    });
  };

  return (
    <div className="live-datetime" aria-live="polite" aria-label="Current date and time">
      <Clock size={12} className="live-datetime-icon" />
      <span className="live-datetime-date">{formatDate(now)}</span>
      <span className="live-datetime-separator">•</span>
      <span className="live-datetime-time">{formatTime(now)}</span>
    </div>
  );
};

export default LiveDateTime;
