import React from "react";
import { Region } from "@/types";

interface GeoFootprintProps {
  id?: string;
  regions: Region[];
  mapImage?: { src: string; alt: string } | React.ReactNode;
}

export const GeoFootprint: React.FC<GeoFootprintProps> = ({
  id,
  regions,
  mapImage,
}) => {
  return (
    <section id={id} className="scroll-mt-24 md:scroll-mt-28 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Global Operations
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our operations span across continents, delivering energy solutions
            worldwide
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Map */}
          <div className="order-2 lg:order-1">
            <div className="bg-gray-100 rounded-2xl overflow-hidden shadow-lg aspect-video relative">
              {mapImage && typeof mapImage === "object" && "src" in mapImage ? (
                <img
                  src={mapImage.src}
                  alt={mapImage.alt}
                  className="w-full h-full object-cover"
                />
              ) : mapImage ? (
                mapImage
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100">
                  <div className="text-center">
                    <svg
                      className="w-16 h-16 text-blue-400 mx-auto mb-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <p className="text-blue-600 font-medium">
                      Global Operations Map
                    </p>
                  </div>
                </div>
              )}

              {/* Sample markers overlay */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/4 left-1/3 w-3 h-3 bg-red-500 rounded-full animate-pulse shadow-lg">
                  <div className="absolute inset-0 bg-red-500 rounded-full animate-ping"></div>
                </div>
                <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-blue-500 rounded-full animate-pulse shadow-lg">
                  <div className="absolute inset-0 bg-blue-500 rounded-full animate-ping"></div>
                </div>
                <div className="absolute bottom-1/3 left-1/4 w-3 h-3 bg-green-500 rounded-full animate-pulse shadow-lg">
                  <div className="absolute inset-0 bg-green-500 rounded-full animate-ping"></div>
                </div>
                <div className="absolute top-1/2 right-1/3 w-3 h-3 bg-yellow-500 rounded-full animate-pulse shadow-lg">
                  <div className="absolute inset-0 bg-yellow-500 rounded-full animate-ping"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Regions List */}
          <div className="order-1 lg:order-2">
            <div className="space-y-6">
              {regions.map((region, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4">
                      <svg
                        className="w-6 h-6 text-blue-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">
                        {region.name}
                      </h3>
                      {region.count && (
                        <p className="text-sm text-gray-500">
                          {region.count} operations
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="text-blue-600">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
