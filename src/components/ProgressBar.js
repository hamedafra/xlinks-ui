export default function ProgressBar({ progress }) {
    return (
      <div>
        <div style={{ width: `${progress}%`, backgroundColor: 'blue' }}>
          {progress}%
        </div>
      </div>
    );
  }