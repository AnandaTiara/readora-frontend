import  { useRef, useState } from "react";
import Footer from "../fragments/Footer";
import Button from "../components/elements/Button";
import Navbar2 from "../components/elements/Navbar2";
import { useParams } from "react-router-dom";
import {  useGetBookRead, useHihglight } from "../hooks/use-books";

import { pdfjs, Document, Page } from 'react-pdf';
import {
  EpubViewer,
  ReactEpubViewer,
  ViewerRef
} from 'react-epub-viewer'
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';
import { useMutation } from "@tanstack/react-query";
import { getHighlightAI } from "../api/books";


pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;


const Read = () => {
  const [selectedText, setSelectedText] = useState("");
  const [popupPosition, setPopupPosition] = useState({ x: 0, y: 0 });
  const [showSmallPopup, setShowSmallPopup] = useState(false);
  const [showLargePopup, setShowLargePopup] = useState(false);
  const [location, setLocation] = useState<string | number>(0)
  const viewerRef = useRef<ViewerRef | any>(null);

  const [numPages, setNumPages] = useState<number>();
  const [pageNumber, setPageNumber] = useState<number>(1);

  const { mutate } = useHihglight()
  const [response, setResponse] = useState("")

  function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
    setNumPages(numPages);
  }

  let { id } = useParams();

  if (!id) {
    return <div>Loading...</div>;
  }

  const { data, isLoading, isError } = useGetBookRead(id);

  if (!data && isLoading) {
    return <div>Loading...</div>;
  }

  if(!data){
    return <div>Book Not Found</div>;
  }

  if (isError) {
    return <div>Book Not Found</div>;
  }

  const handleMouseUp = () => {
    setResponse("")
    const selection = window.getSelection();
    if (!selection || selection.rangeCount === 0) return;

    const text = selection.toString().trim();
    if (text !== "") {
      const range = selection.getRangeAt(0);
      const rect = range.getBoundingClientRect();

      setSelectedText(text);
      setPopupPosition({
        x: rect.left + window.scrollX,
        y: rect.top + window.scrollY - 40,
      });

      setShowSmallPopup(true);
      setShowLargePopup(false);

      setTimeout(() => {
        setShowSmallPopup(false);
        setShowLargePopup(true);

        mutate({
          highlightText: selectedText,
          page: pageNumber.toString(),
          id: data.data.id
        }, {
          onSuccess(data) {
            setResponse(data.data.response)
          },
        });
      }, 2000);

    } else {
      setShowSmallPopup(false);
      setShowLargePopup(false);
    }
  };

  const handleNext = () => {
    if (pageNumber >= 1) {
      setPageNumber((page) => page + 1);
    }

    if (viewerRef) {
      const node = viewerRef.current as ViewerRef

      node.nextPage()
    }
  }

  const handlePrev = () => {
    if (pageNumber > 1) {
      setPageNumber((page) => page - 1);
    }
  }

  return (
    <div>
      <div className="flex min-h-screen bg-neutral-500">
        <div className="flex-1 flex flex-col">
          <Navbar2 book={data.data} className="md:rounded-md" />

          <main
            className="overflow-auto max-w-4xl h-full mx-auto text-accent-black mt-70 font-TimesNewRoman mb-30"
            onMouseUp={handleMouseUp}
          >
            {data.data.file_type && data.data.file_type === "application/pdf" && (
            <Document file={data.data.file_url} onLoadSuccess={onDocumentLoadSuccess} className="min-w-[400px]">
              <Page pageNumber={pageNumber} width={800} onSelect={handleMouseUp} />
            </Document>
            )}

            {data.data.file_type && data.data.file_type === "application/epub+zip" && (
            //  <div className="min-w-[400px] h-full">
              // <div style={{ position: "relative", height: "100%" }}>
                <EpubViewer 
                  url={data.data.file_url ?? ""}
                  ref={viewerRef}
                />
              // </div>
            )}



            {showSmallPopup && (
              <div
                className="absolute bg-gray-800 text-white text-xs px-2 py-1 rounded-md"
                style={{ top: popupPosition.y, left: popupPosition.x }}
              >
                Highlight 
              </div>
            )}

            {showLargePopup && (
              <div
                className="absolute bg-white shadow-lg p-4 rounded-md text-sm border border-gray-300"
                style={{ top: popupPosition.y, left: popupPosition.x }}
              >
                <p className="font-bold">Definition:</p>
                <p className="">{response ? response : "Loading..."}</p>
              </div>
            )}

            <div className="flex justify-between">
              <Button className="flex justify-end cursor-pointer" onClick={handlePrev}>Previous</Button>
              <Button className="flex justify-end cursor-pointer" onClick={handleNext}>Next</Button>
            </div>
          </main>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Read;