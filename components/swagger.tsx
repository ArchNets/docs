import SwaggerUI from 'swagger-ui-react';
import 'swagger-ui-react/swagger-ui.css';

interface SwaggerProps {
  url: string;
  title?: string;
  description?: string;
}

export default function Swagger(props: Readonly<SwaggerProps>) {
  return (
    <div className='relative'>
      {/* Header */}
      {(props.title || props.description) && (
        <div className="mb-6 pb-6 border-b border-s-stroke2">
          {props.title && (
            <h1 className="text-2xl font-bold text-t-primary mb-2">{props.title}</h1>
          )}
          {props.description && (
            <p className="text-t-secondary">{props.description}</p>
          )}
        </div>
      )}

      {/* Swagger UI Container */}
      <div className="swagger-container rounded-lg overflow-hidden">
        <SwaggerUI url={props.url} />
      </div>

      <style jsx global>{`
        /* Swagger UI Theme Overrides */
        .swagger-ui {
          font-family: inherit !important;
        }
        
        .swagger-ui .topbar {
          display: none !important;
        }
        
        .swagger-ui .info {
          margin: 20px 0 !important;
        }
        
        .swagger-ui .info .title {
          font-size: 1.5rem !important;
          font-weight: 700 !important;
        }
        
        .swagger-ui .opblock {
          border-radius: 8px !important;
          border: 1px solid var(--s-stroke2) !important;
          margin-bottom: 12px !important;
          box-shadow: none !important;
        }
        
        .swagger-ui .opblock .opblock-summary {
          border-radius: 8px !important;
          padding: 12px 16px !important;
        }
        
        .swagger-ui .opblock.opblock-get {
          border-color: var(--primary-01) !important;
          background: rgba(42, 133, 255, 0.05) !important;
        }
        
        .swagger-ui .opblock.opblock-get .opblock-summary {
          border-color: transparent !important;
        }
        
        .swagger-ui .opblock.opblock-post {
          border-color: var(--primary-02) !important;
          background: rgba(0, 166, 86, 0.05) !important;
        }
        
        .swagger-ui .opblock.opblock-put {
          border-color: var(--primary-05) !important;
          background: rgba(255, 157, 52, 0.05) !important;
        }
        
        .swagger-ui .opblock.opblock-delete {
          border-color: var(--primary-03) !important;
          background: rgba(255, 56, 28, 0.05) !important;
        }
        
        .swagger-ui .opblock .opblock-summary-method {
          border-radius: 6px !important;
          font-weight: 600 !important;
          min-width: 80px !important;
          text-align: center !important;
        }
        
        .swagger-ui .opblock.opblock-get .opblock-summary-method {
          background: var(--primary-01) !important;
        }
        
        .swagger-ui .opblock.opblock-post .opblock-summary-method {
          background: var(--primary-02) !important;
        }
        
        .swagger-ui .opblock.opblock-put .opblock-summary-method {
          background: var(--primary-05) !important;
        }
        
        .swagger-ui .opblock.opblock-delete .opblock-summary-method {
          background: var(--primary-03) !important;
        }
        
        .swagger-ui .btn {
          border-radius: 6px !important;
          font-weight: 500 !important;
        }
        
        .swagger-ui .btn.execute {
          background: var(--primary-01) !important;
          border-color: var(--primary-01) !important;
        }
        
        .swagger-ui .btn.execute:hover {
          background: var(--primary-01) !important;
          opacity: 0.9;
        }
        
        .swagger-ui select {
          border-radius: 6px !important;
        }
        
        .swagger-ui input[type=text],
        .swagger-ui textarea {
          border-radius: 6px !important;
          border: 1px solid var(--s-stroke2) !important;
        }
        
        .swagger-ui .model-box {
          border-radius: 8px !important;
        }
        
        .swagger-ui table tbody tr td {
          padding: 12px 8px !important;
        }
        
        /* Dark mode specific */
        .dark .swagger-ui {
          filter: none !important;
        }
        
        .dark .swagger-ui .opblock .opblock-summary-path,
        .dark .swagger-ui .opblock .opblock-summary-description,
        .dark .swagger-ui .info .title,
        .dark .swagger-ui .info p,
        .dark .swagger-ui .info li,
        .dark .swagger-ui label,
        .dark .swagger-ui .parameter__name,
        .dark .swagger-ui .parameter__type,
        .dark .swagger-ui .response-col_status,
        .dark .swagger-ui table thead tr th,
        .dark .swagger-ui table tbody tr td,
        .dark .swagger-ui .model-title,
        .dark .swagger-ui .model {
          color: var(--t-primary) !important;
        }
        
        .dark .swagger-ui .opblock .opblock-section-header {
          background: var(--b-surface2) !important;
        }
        
        .dark .swagger-ui input[type=text],
        .dark .swagger-ui textarea,
        .dark .swagger-ui select {
          background: var(--b-surface2) !important;
          color: var(--t-primary) !important;
        }
      `}</style>
    </div>
  );
}
