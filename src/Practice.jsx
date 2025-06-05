import { useState, useEffect } from 'react';
import { Button } from 'flowbite-react';
import ReactFlow, { 
  Background,
} from 'reactflow';
import 'reactflow/dist/style.css';
import Cookies from 'js-cookie';
import Setup from './Setup';

const Practice = () => {
  const [hasReadSetup, setHasReadSetup] = useState(false);
  const [selectedTime, setSelectedTime] = useState(null);
  const [showVideos, setShowVideos] = useState(false);

  // Check for cookie on component mount
  useEffect(() => {
    const setupRead = Cookies.get('setupRead');
    if (setupRead === 'true') {
      setHasReadSetup(true);
    }
  }, []);

  const handleReadSetup = () => {
    Cookies.set('setupRead', 'true', { expires: 365 }); // Cookie expires in 1 year
    setHasReadSetup(true);
  };

  // Flow nodes and edges
  const initialNodes = [
    {
      id: 'time-question',
      type: 'input',
      data: { label: 'How much time do you have today?' },
      position: { x: 250, y: 0 },
    },
    {
      id: 'less-than-60',
      data: { label: '< 60 minutes' },
      position: { x: 100, y: 100 },
    },
    {
      id: 'more-than-60',
      data: { label: '> 60 minutes' },
      position: { x: 400, y: 100 },
    },
  ];

  const initialEdges = [
    { id: 'e1-2', source: 'time-question', target: 'less-than-60' },
    { id: 'e1-3', source: 'time-question', target: 'more-than-60' },
  ];

  const [nodes] = useState(initialNodes);
  const [edges] = useState(initialEdges);

  const onNodeClick = (event, node) => {
    if (node.id === 'less-than-60') {
      setSelectedTime('short');
      setShowVideos(true);
    } else if (node.id === 'more-than-60') {
      setSelectedTime('long');
      setShowVideos(true);
    }
  };

  // Video lists
  const shortVideos = [
    { id: 1, title: 'Quick Morning Flow', duration: '15 min', url: '/videos/quick-morning' },
    { id: 2, title: 'Evening Wind Down', duration: '20 min', url: '/videos/evening-wind-down' },
    { id: 3, title: 'Lunch Break Flow', duration: '30 min', url: '/videos/lunch-break' },
  ];

  const longVideos = [
    { id: 1, title: 'Full Body Flow', duration: '75 min', url: '/videos/full-body' },
    { id: 2, title: 'Deep Stretch Sequence', duration: '90 min', url: '/videos/deep-stretch' },
    { id: 3, title: 'Advanced Practice', duration: '60 min', url: '/videos/advanced' },
  ];

  if (!hasReadSetup) {
    return (
      <div className="container mx-auto px-4 py-8">
        <Setup />
        <div className="mt-8 text-center">
          <Button color="primary" size="lg" onClick={handleReadSetup}>
            I Read This
          </Button>
        </div>
      </div>
    );
  }

  if (showVideos) {
    const videos = selectedTime === 'short' ? shortVideos : longVideos;
    return (
      <div className="container mx-auto px-4 py-8">
        <h2 className="mb-6 text-2xl font-bold text-primary">
          {selectedTime === 'short' ? 'Quick Flows' : 'Your Path Flows'}
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {videos.map((video) => (
            <div key={video.id} className="rounded-lg border border-primary-100 bg-white p-4 shadow-md">
              <h3 className="mb-2 text-lg font-semibold text-primary">{video.title}</h3>
              <p className="mb-4 text-gray-600">Duration: {video.duration}</p>
              <Button color="primary" href={video.url}>
                Start Practice
              </Button>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Button color="gray" onClick={() => setShowVideos(false)}>
            Back to Time Selection
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto h-[600px] px-4 py-8">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodeClick={onNodeClick}
        fitView
      >
        <Background />
      </ReactFlow>
    </div>
  );
};

export default Practice; 